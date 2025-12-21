import Button from '@mui/material/Button';
import TodoForm from './TodoForm';
import TodoDisplay from './TodoDisplay';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Todo.css'
import {localStorageGetData, localStorageSetData} from './LocalStorage';


export default function Todo() {

    let [todo, setTodo] = useState(() => localStorageGetData());

    let addTaskBtn = (newTodo) => {
        if (!newTodo) return;

        //Check same value
        let tasklist = todo.map(item => item.task);
        if (tasklist.includes(newTodo)) {
            return;
        }

        setTodo((pre) => (
            [...pre, { task: newTodo, id: uuidv4() }]
        ))
    }
    //deleted all task
    let deletAll = () => {
        setTodo([]);
    }

    //Todo Data Add localStroage
    localStorageSetData(todo);

    //-------Data and Time add on the Screen.
    let [dataTime, setDateTime] = useState("");
    let interval = setInterval(()=>{
       let now = new Date(); // calling Date function
       let date = now.toLocaleDateString();
       let time = now.toLocaleTimeString();
       setDateTime(`${date}--${time}`)
    },1000);

    return (
        <section className="todo-container">
            <header>
                <h2>Todo Application</h2>
                <h3>{dataTime}</h3>
            </header>
            <TodoForm onAddTask={addTaskBtn} />
            <TodoDisplay todo={todo} setTodo={setTodo} />
            <div>
                <Button variant="contained" onClick={deletAll}>Delet All</Button>
            </div>
        </section>
    )
}