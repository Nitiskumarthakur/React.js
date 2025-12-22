// COntrolled :- react are those where the form data handle by the react State Unsing the useState.

import { useState } from "react"
export default function Controlled(){

    let [name, setName] = useState("");
    let [show, setShow] = useState("");
    let handleInp = (e)=>{
        setName(e.target.value);
    }
    let handle = ()=>{
        console.log(name);
        setName("");
        setShow(name);
    }

    return (
        <div>
            <p>{show}</p>
            <h2>Controlled Component</h2>
            <input type="text" value={name} onChange={handleInp}/>
            <button onClick={handle}>show</button>
        </div>
    )
}