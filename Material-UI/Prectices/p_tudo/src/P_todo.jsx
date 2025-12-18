import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function P_todo() {

    let [todo, newTodo] = useState([{ task: "read", id: uuidv4() }])
    let [N, setNew] = useState("");

    let handleInp = ((event) => {
        setNew(event.target.value);
    })
    
    let addBtn = () => {
        newTodo((pre) => (
            [...pre, { task: N, id: uuidv4() }]
            
        ))
        setNew("");
    }
    // Deleted
    let det = (id)=>{
        newTodo((pre)=> todo.filter((pre)=>pre.id != id));
    }



    return (
        <div>
            <h2 style={{ color: "blue" }}>Welcome To New Chapter</h2>
            <input type="text" placeholder="Enter something " value={N} onChange={handleInp}/> &nbsp;
            <button onClick={addBtn}>Click me </button>
            <ul>
                {
                  todo.map((todo)=>(
                    <li key={todo.id}>
                        <span>
                            
                            {todo.task}
                            <button onClick={()=>det(todo.id)}>delt</button> &nbsp;
                        </span>
                    </li>
                  ))
                }
            </ul>
        </div>
    )
}