import { useState } from "react";
import { useTodo } from "../Contexts/TodoContexts";

function TodoItem({todo}) {
    
    
    
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo[0].todo)
    
    const {updatedTodo, deleteTodo, toggleCompleted} = useTodo();
     
    const editTodo = ()=>{
        updatedTodo(todo.id, {...todo, todo:todoMsg})
        setIsTodoEditable(false);
    }

    

    // const toggleComplet = ()=>{
    //     toggleCompleted(todo.id)
    // }
    // const del = ()=>{
    //     deleteTodo(todo.id)
    // }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo[0].completed ? "bg-[#c6e9a7]"  : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                // onChange={toggleComplet}
                onChange={()=>toggleCompleted(todo[0].id)}
            />
            
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo[0].completed ? "line-through" : ""}`}
                value={todoMsg}
                
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo[0].completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                 onClick={() => deleteTodo(todo[0].id)}
                // onClick={del}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;









