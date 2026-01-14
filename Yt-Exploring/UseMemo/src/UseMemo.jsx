import { useState } from "react"
import Expensive from "./Expensive";
export default function UseMemo(){
    
    const [count, setCount] = useState(0);
    return(
        <div>
            <Expensive/>
            <button onClick={()=>setCount(count+1)}>Re-Render Parent</button>
            <p>Parent re-render: {count}</p>
        </div>
    )
}