import { useContext } from "react"
import { EditTodoForm } from "./components/EditTodoForm";
import { TodoForm } from "./components/TodoForm"
import { TodoList } from "./components/TodoList"
import { TodosContext } from "./providers/TodosContext/TodosContext";

function App() {
  const { editingTodo, setEditingTodo } = useContext(TodosContext);

  return (
    <div className="App">
      <TodoForm />
      <TodoList />
      {editingTodo ? <div>
        <button onClick={() => setEditingTodo(null)}>Fechar</button>
        <EditTodoForm />
      </div> : null}

    </div>
  )
}

export default App
