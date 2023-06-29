import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TodosProvider } from "./providers/TodosContext/TodosContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <TodosProvider>
         <App />
      </TodosProvider>
   </React.StrictMode>
);
