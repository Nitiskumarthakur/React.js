import { useState } from "react";
import { Children } from "react";
import { useCallback } from "react";


export const Button = ({onClick, children})=>{
    console.log(`Rendering Button ${children}`)

    return(
        <button onClick={onClick}>{children}</button>
    )
}
export default function UseCallback() {
    
    const [count, setCount] =useState(0);
     
    //Memoize tht Increment Function.
    const increment = useCallback(()=>{
        console.log("increment inside");
        setCount((pre)=>pre+1);
    },[]);
    //Memoize tht Decrement Function.
    const decrement = useCallback(()=>{
        console.log("decrement inside");
        setCount((pre)=>pre-1);
    },[]);

    return (
        <div>
            <h2>Count: {count}</h2>
            <Button onClick={increment}>Increment</Button>&nbsp;
            <Button onClick={decrement}>Decrement</Button>
        </div>
    )
}