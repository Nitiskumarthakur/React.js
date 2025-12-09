import { useState } from "react"
export default function Totodo(){
    let [task, settask] = useState(["something"]);
    let [newTask, setNewTask] = useState("");
    
    let updatetask = (event)=>{
        setNewTask(event.target.value);
        console.log(newTask);
         
    }
    let addTask = ()=>{
        settask([...task, newTask]);
        setNewTask("");
    }
    return (
        <div>
            <h3>Todo Application</h3>
            <input type="text" placeholder="Enter somthing" value={newTask} onChange={updatetask}/><br></br>
            <button onClick={addTask}>Add task</button>
            <hr />
            <p>List task</p>
            <ul>
                {
                  task.map((task)=>(
                    <li>{task}</li>
                  ))
                }
            </ul>
        </div>
    )
}