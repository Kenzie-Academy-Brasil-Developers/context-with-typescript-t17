import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../Input";
import { registerFormSchema, TRegisterForm } from "./registerFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

export const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors }} = useForm<TRegisterForm>({
        resolver: zodResolver(registerFormSchema)
    });

    const { userRegister } = useContext(UserContext);

    const submit: SubmitHandler<TRegisterForm> = (formData) => {
        userRegister(formData);
    }

    //UseFormRegisterReturn<string>

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Nome" type="text" placeholder="Digite o seu nome" error={errors.name} {...register("name")} />
            <Input label="E-mail" type="email" placeholder="Digite o seu nome" error={errors.email} {...register("email")} />
            <Input label="Senha" type="password" placeholder="Digite o seu nome" error={errors.password} {...register("password")} />
            <Input label="Confirmação de senha" type="password" placeholder="Digite o seu nome" error={errors.confirm} {...register("confirm")} />
            <button type="submit">Cadastrar-se</button>
        </form>
    )
}