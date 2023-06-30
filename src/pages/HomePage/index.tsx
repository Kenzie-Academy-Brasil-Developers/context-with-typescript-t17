import { useContext } from "react";
import { EditTodoForm } from "../../components/EditTodoForm";
import { TodoForm } from "../../components/TodoForm";
import { TodoList } from "../../components/TodoList";
import { TodosContext } from "../../providers/TodosContext/TodosContext";

export const HomePage = () => {
   const { editingTodo, setEditingTodo } = useContext(TodosContext);

   return (
      <main>
         <TodoForm />
         <TodoList />
         {editingTodo ? (
            <div>
               <button onClick={() => setEditingTodo(null)}>Fechar</button>
               <EditTodoForm />
            </div>
         ) : null}
      </main>
   );
};
