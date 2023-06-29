import { useContext } from "react"
import { TodosContext } from "../../providers/TodosContext/TodosContext"
import { TodoCard } from "./TodoCard";

export const TodoList = () => {
    const { todoList } = useContext(TodosContext);

    return(
        <ul>
            {todoList.map(todo => (
                <TodoCard key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}