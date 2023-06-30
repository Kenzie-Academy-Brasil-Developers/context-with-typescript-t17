import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().nonempty("O nome é obrigatório"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Forneça um e-mail válido"),
    password: z.string().nonempty("A senha é obrigatório").min(8, "A senha precisa conter pelo menos 8 caracteres"),
    confirm: z.string().nonempty("Confirmar a senha é obrigatório")
}).refine(({ password, confirm}) => password === confirm, {
    message: "As senhas precisam corresponder",
    path: ["confirm"],
})

export type TRegisterForm = z.infer<typeof registerFormSchema>;