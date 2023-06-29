import { TEditTodoForm } from "../../components/EditTodoForm/editTodoFormSchema";
import { TTodoForm } from "../../components/TodoForm/todoFormSchema";

export interface ITodosProviderProps{
    children: React.ReactNode;
} 

export interface ITodo{
    id: string;
    title: string;
    content: string;
}

export interface ITodosContext{
    todoList: ITodo[];
    addTodo: (formData: TTodoForm) => void;
    deleteTodo: (todoId: string) => void;
    editTodo: (formData: TEditTodoForm, todoId: string) => void;
    editingTodo: ITodo | null;
    setEditingTodo: React.Dispatch<React.SetStateAction<ITodo | null>>
}