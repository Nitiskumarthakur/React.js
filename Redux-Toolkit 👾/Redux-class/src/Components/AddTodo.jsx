import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo , markDone } from "../Feature/todo/todoSlice";

export default function AddTodo(){
    
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submithandle = (e)=>{
        e.preventDefault();
        console.log(task)
        dispatch(addTodo(task));
        setTask(""); 
    }

    return(
        <div>
            <form onSubmit={submithandle}>
                <input 
                   type="text"
                   value={task} 
                   required
                   onChange={(e)=>setTask(e.target.value)}
                />
                <button>Add Task</button>
            </form> 
        </div>
    )
}