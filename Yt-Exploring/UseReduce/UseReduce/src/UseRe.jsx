import { useReducer } from "react"

export default function UseRe(){
    const reducer = (state, action)=>{
        if(action.type === "INCREMENT"){
            return state+1;
        }
        if(action.type === "DECREMENT"){
            return state-1;
        }if(action.type === "RESET"){
            return state = 0;
        }

    }
    const [count, dispatch] = useReducer(reducer, 1);
    
    
    return(
        <div>
            <h2>Lear UseReduce</h2>
            <p><b>useReducer</b> is a React Hook for managing complex component state</p>
            
            <h2>Count: {count} </h2>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>&nbsp;&nbsp;
            <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>&nbsp;&nbsp;
            <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </div>
    )
}