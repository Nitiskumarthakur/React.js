import { useEffect, useState } from "react";
//import './Usechallenge.css'
export default function UseChallenge(){

    let [name, setName] = useState("");
    let [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("Name: ",name);
    },[name]);

    useEffect(()=>{
        document.title = `count: ${count}`
    },[count]);
    return(
        <div className="container">
            <h2>UseEffect chellenge</h2>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count += 1)}>Increment</button>
            <p>Name: {name}</p>
            <input 
              type="text"
              placeholder="Enter you Name"
              onChange={(e)=>setName(e.target.value)}
              value={name}
            />
        </div>
    )
}