import { useState } from "react"
// import { useTodo } from "../Contexts/TodoContexts";
import { useTodo } from "../Contexts/TodoContexts";

export default function TodoForm(){

    const [todo, setTodo] = useState("");

    const {addTodo} = useTodo();
    // console.log(todo)
    const add = (e)=>{
        e.preventDefault();
        if(!todo) return

        addTodo({todo, completed:false})
        console.log(todo);
        setTodo("");
    }
    return(
        <form onSubmit={add} className="flex">
            <input 
              type="text"
              placeholder="Write todo......"
              className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
            >
                Add
            </button>
        </form>
    )
}