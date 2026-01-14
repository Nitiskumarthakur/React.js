import { useState } from "react"
import CountMemo from "./CountMemo"
export default function ReactMemo(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <p><b>Parent-Component:</b> This part is RectMemo</p>
            <p>Count: {count}</p>
            <button onClick={()=>setCount((pre)=>pre+1)}>Button</button>
           <CountMemo/>
        </div>
    )
}