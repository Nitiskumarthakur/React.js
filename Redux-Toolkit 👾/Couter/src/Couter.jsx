import { useSelector, useDispatch } from "react-redux"
import { increment, decement, incrementByNumber } from "./feature/couterSlice";
import { useState } from "react";
export const Couter = () => {

    const count = useSelector((state)=>state.couter.value)

    const dispatch  = useDispatch();

    const [num, setNum] = useState(5);

    return (
        <div>
           <h1>Couter</h1>
           <h2>{count}</h2>

           <button onClick={()=> dispatch(increment())}>Increment</button>
           <button onClick={()=>dispatch(decement())}>Decement</button>
            <br></br>
           <input 
               type="number"
               value={num}
               onChange={(e)=>setNum(e.target.value)}
           />
           <button onClick={()=>dispatch(incrementByNumber(Number(num)))}>IncrementByNumber</button>
        </div>
    )
}
