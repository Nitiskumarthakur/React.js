import { useEffect } from "react";
let todoKey = "ReactTodo";
import { v4 as uuidv4 } from 'uuid';
export  function localStorageGetData(){
 try {
            const savedTodos = localStorage.getItem(todoKey); //get data 

            // Check karo ki savedTodos null ya undefined to nahi hai
            if (savedTodos && savedTodos !== "undefined") {
                const parsed = JSON.parse(savedTodos);
                // Agar valid array hai to return karo
                if (Array.isArray(parsed) && parsed.length > 0) {
                    return parsed;
                }
            }
        } catch (error) {
            console.error("Error loading todos:", error);
        }

        // Default value return karo
        return [{ task: "Read", id: uuidv4(), completed: false }];
}


export  function localStorageSetData(todo){
    useEffect(() => {
        try {
            localStorage.setItem(todoKey, JSON.stringify(todo));
        } catch (error) {
            console.error("Error saving todos:", error);
        }
    }, [todo]);
}