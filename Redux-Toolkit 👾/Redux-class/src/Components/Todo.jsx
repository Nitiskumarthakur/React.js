import { useSelector } from "react-redux"
import AddTodo from "./AddTodo";
import { useDispatch } from "react-redux";
import { deleteTodo,markDone } from "../Feature/todo/todoSlice";
 

export default function Todo() {

    const todos = useSelector((state) => state.todos);
    console.log(todos);
    
    const dispatch = useDispatch();

    const deleteHandle =(id)=>{
        dispatch(deleteTodo(id)); 
    }

    const checkHandle = (id)=>{
        dispatch(markDone(id));
        console.log(id);
    }
    return (
        <div>
            <AddTodo/>
            <h2>Todo list </h2>
            {todos.map((todo)=>(
                <li key={todo.id}>
                    <spna style={todo.isDone?{textDecorationLine:"line-through", color:"green"}:{}}>{todo.task}</spna>
                    <button onClick={()=>deleteHandle(todo.id)}>Delete</button>
                    <input type="checkbox" onClick={() => checkHandle(todo.id)}/>
                </li>
                
            ))}
        </div>
    )
}