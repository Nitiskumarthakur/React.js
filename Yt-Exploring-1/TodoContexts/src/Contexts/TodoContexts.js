import { useContext } from "react";
import { createContext,  } from "react";

export const TodoContexts = createContext({
    todos: [
        {
            id: 1,
            todo: "learn",
            completed: false,
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleCompleted:()=>{}
})


// export const useTodo = ()=>{
//     return useCallback(TodoContexts)
// }
export const useTodo = ()=>{
    return useContext(TodoContexts)
}

export const TodoProvider = TodoContexts.Provider;





