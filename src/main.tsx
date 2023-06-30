import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { TodosProvider } from "./providers/TodosContext/TodosContext";
import { UserProvider } from "./providers/UserContext/UserContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <BrowserRouter>
         <UserProvider>
            <TodosProvider>
               <App />
            </TodosProvider>
         </UserProvider>
      </BrowserRouter>
   </React.StrictMode>
);
