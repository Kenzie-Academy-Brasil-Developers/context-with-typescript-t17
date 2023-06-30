import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTodoFormSchema, TEditTodoForm } from "./editTodoFormSchema";
import { useContext } from "react";
import { TodosContext } from "../../providers/TodosContext/TodosContext";

export const EditTodoForm = () => {
   const { editingTodo, editTodo, setEditingTodo } = useContext(TodosContext);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<TEditTodoForm>({
      resolver: zodResolver(editTodoFormSchema),
      defaultValues: {
         title: editingTodo?.title,
         content: editingTodo?.content,
      },
   });

   const submit: SubmitHandler<TEditTodoForm> = (formData) => {
      if (editingTodo?.id) {
         editTodo(formData, editingTodo.id);
         setEditingTodo(null);
      }
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <input type="text" {...register("title")} />
         {errors.title ? <p>{errors.title.message}</p> : null}
         <input type="text" {...register("content")} />
         {errors.content ? <p>{errors.content.message}</p> : null}
         <button type="submit">Atualizar nota</button>
      </form>
   );
};
