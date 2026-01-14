import { useReducer } from "react"

export default function Prectices(){

    const initialState = {
        count:0,
        inc:2,
        dec:2,
    }
    const reducer=(state, action)=>{
        switch(action.type){
            case "INCREMENT":
                return {...state, count: state.count+state.inc};
            case "DECREMENT":
                return {...state, count: state.count-state.dec};
            case "RESET":
                return {...state, count:0};
            default:
                return state;  
        }

    }

    const [state, dispatch] = useReducer(reducer, initialState)
    return(
       <div>
          <h1>Count: {state.count}</h1>
          <button onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>&nbsp;
          <button onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>&nbsp;
          <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
       </div>
    )
}