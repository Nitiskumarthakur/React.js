import CheckIcon from '@mui/icons-material/Check';//correct
import ClearIcon from '@mui/icons-material/Clear'; //deleded
import { useState } from 'react';
export default function TodoDisplay({ todo, setTodo }) {

    let deletBtn = (id) => {
        setTodo((pre) => todo.filter((pre) => pre.id != id));
    }


    let handleDeco = (id) => {
        setTodo(todo.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    }

    const customStyle = {
        textDecoration: 'line-through',
        textDecorationColor: 'red',
        textDecorationThickness: '2px'
    };


    return (
        <div>
            <h2 style={{ color: "maroon" }}>List of the task</h2>
            <ul>
                <div className="divMain">
                    {
                        todo.map((todo) => (
                            <li key={todo.id}>
                                <span className="todo-li"
                                    style={{
                                        textDecoration: todo.completed ? 'line-through' : 'none',
                                        textDecorationColor: todo.completed ? '#ff0000' : 'transparent',
                                        textDecorationThickness: todo.completed ? '5px' : '0px',
                                        color: todo.completed ? '#888' : '#000'
                                    }}>
                                    {todo.task}
                                </span>
                                <span className='checkIcon' >
                                    <CheckIcon onClick={() => handleDeco(todo.id)} />
                                </span>
                                <span className='clearIcon'>
                                    <ClearIcon onClick={() => deletBtn(todo.id)} />
                                </span>
                            </li>
                        ))
                    }
                </div>
            </ul>
        </div>
    )
}

