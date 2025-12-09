import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo(){
    let [todo, setTodo] = useState([{task:"simple task", id:uuidv4()}])
    let [newTodo, setNewTodo] = useState("");
    
    //---- ADD Btn------
    let addTodotask =()=>{
        setTodo((prevtodo)=>(
            [...prevtodo, {task: newTodo, id: uuidv4()}]
        ));
        setNewTodo("");
    };
    //----Tracking on Input Box------
    let updataTodo = (event)=>{
        setNewTodo(event.target.value);
       // console.log(newTodo);
    };
    //----Delete Btn------
    let deletbtn = (id)=>{
       setTodo((prevtodo)=> todo.filter((prevtodo)=> prevtodo.id != id)) // for deletion.
    };
    //-----To Convert Upcase------ Using callback.
    let upperCaseAll =()=>{
      setTodo((prevtodo)=>
        prevtodo.map((todo)=>{
            return{
               ...todo,
               task: todo.task.toUpperCase(),
            }   
        })
        );
    };
    //------update one task Uppercase-------
    let UppercaseOneBtn = (id)=>{
        setTodo((prevtodo)=>
            prevtodo.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,
                        task:todo.task.toUpperCase(),
                    }
                }else{
                    return todo;
                }   
            })
        );
    };
    //--------LowerCase--------
    let lowercaseOneBtn = (id)=>{
        setTodo((prevtodo)=>
            prevtodo.map((todo)=>{
                if(todo.id == id){
                    return{
                        ...todo,
                        task:todo.task.toLowerCase(),
                    }
                }else{
                    return todo;
                }
            })
        )
    }
    //---------Return Section stated------------
    return (
        <div>
            <h2>Create Todo App</h2>
            <input  
            placeholder="Enter ........"
            value={newTodo} 
            onChange={updataTodo}
            />&nbsp;
            <button onClick={addTodotask}>Add Task</button>
            <hr style={{backgroundColor:"#ff0545", height:"5px",}}></hr>

            <h4>List of Todo</h4>
            <ul>
                {
                  todo.map((todo)=>(
                    <li key={todo.id}>
                        <span>
                            {todo.task} &nbsp;
                            <button onClick={ ()=>deletbtn(todo.id)}>Delete</button> &nbsp;
                            <button onClick={()=>UppercaseOneBtn(todo.id)}>UppercaseOne</button> &nbsp;
                            <button onClick={()=>lowercaseOneBtn(todo.id)}>UppercaseOne</button> &nbsp; 
                        </span>
                    </li>
                  ))
                }
            </ul>
            <br />
            <button onClick={upperCaseAll}>UpperCase</button>
        </div>

    )
}