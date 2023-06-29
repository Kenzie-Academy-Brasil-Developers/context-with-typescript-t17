import { z } from "zod";

export const editTodoFormSchema = z.object({
   title: z.string().nonempty("O título é obrigatório"),
   content: z
      .string()
      .nonempty("O conteúdo é obrigatório")
      .min(8, "O conteúdo precisa ter no mínimo 8 caracteres"),
});

export type TEditTodoForm = z.infer<typeof editTodoFormSchema>;