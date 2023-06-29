import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { todoFormSchema, TTodoForm } from "./todoFormSchema";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useContext } from "react";
import { TodosContext } from "../../providers/TodosContext/TodosContext";

export const TodoForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TTodoForm>({
        resolver: zodResolver(todoFormSchema)
    });

    const { addTodo } = useContext(TodosContext);

    const submit: SubmitHandler<TTodoForm> = (formData) => {
        addTodo(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" {...register("title")} />
            {errors.title ? <p>{errors.title.message}</p> : null}
            <input type="text" {...register("content")} />
            {errors.content ? <p>{errors.content.message}</p> : null}
            <button type="submit">Cadastrar nota</button>
        </form>
    )
}