import { useContext } from "react";
import { ITodo } from "../../../providers/TodosContext/@types"
import { TodosContext } from "../../../providers/TodosContext/TodosContext";

interface ITodoCardProps{
    todo: ITodo;
}

export const TodoCard = ({ todo }: ITodoCardProps) => {
    const { deleteTodo, setEditingTodo } = useContext(TodosContext);

    return(
        <li>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <button onClick={() => deleteTodo(todo.id)}>Remover</button>
            <button onClick={() => setEditingTodo(todo)}>Editar</button>
        </li>
    )
}