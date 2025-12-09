import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import './TodoApp.css'
export default function TodoApp() {
    let [todo, setTodo] = useState([{ task: "Read", id: uuidv4(), }]);
    let [newTodo, setNewTodo] = useState("");

    //--------Add task------
    let addtask = () => {
        setTodo((prevtodo) => (
            [...prevtodo, { task: newTodo, id: uuidv4(), }]
        ))
        setNewTodo("");
    };
    //-------UpData Todo List--------
    let upDateTodo = (event) => {
        setNewTodo(event.target.value);
        //console.log(newTodo);
    };
    //-----------Delete Task------
    let deletTask = (id) => {
        setTodo((prevtodo) => todo.filter((prevtodo) => prevtodo.id != id));

    }
    return (

        <div className="TodoApp">
            <div className="innerpart">
                <h2>Welcome To Todo App</h2>
                <div className="inputSection">
                    <input className="inp" type="text" placeholder="Enter Task Today" value={newTodo} onChange={upDateTodo} />
                    &nbsp;
                    <button className="btn" onClick={addtask}>Add Task</button>
                </div>
                {/* List Section */}
                <h3>List Task</h3>
                {/* <hr style={{ backgroundColor: "#ff0545", height: "5px",width:"100%"}}></hr> */}
                <ul>
                    {
                        todo.map((todo) => (
                            <li key={todo.id}>
                                <span>
                                    <input type="checkbox" onDoubleClick={() => deletTask(todo.id)} />
                                    {todo.task.charAt(0).toUpperCase() + todo.task.slice(1).toLowerCase()}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}