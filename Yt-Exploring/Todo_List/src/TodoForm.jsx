import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function TodoForm({onAddTask}) {

    let [newTodo, setNewTodo] = useState("");
    
    let handleInp =((event)=>{
        setNewTodo(event.target.value);
    })
    
    let addTaskBtn = ()=>{
        onAddTask(newTodo);
        setNewTodo("");
    }

    return (
        <section>
            <form className="todo-form">
                <TextField id="outlined-basic" label="Enter Task" variant="outlined" value={newTodo} onChange={handleInp} />&nbsp;
                <Button variant="contained" className='Todo-btn' onClick={addTaskBtn}  >Add task</Button>
            </form>
        </section>
    )
}