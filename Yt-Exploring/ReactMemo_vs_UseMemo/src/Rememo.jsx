import { useState } from "react"
import Recount from "./ReCount";
import { useMemo } from "react";
export default function Rememo(){
    let [num, setNum] = useState(0);

    const bioData = useMemo(()=>{
        return{
            name:'Nitish thakur',
            age:21,
        }
    },[])

    return(
        <div>
            <p>NumCount: {num}</p>
            <button onClick={()=>setNum(num+1)}>Increment</button>
            <Recount bioData={bioData}/>
        </div>
    )
}