import { useState } from "react"
export default function ChallengeState(){

    let [count, setCount] = useState(10);
    let [num , setNum] = useState();

    
    let hnadleInp = (e)=>{
       let inpDate=(e.target.value);
       setNum(inpDate);
    }
    let increment =()=>{
        setCount(count +JSON.parse(num))
    }
    let decement = ()=>{
        if(count > 0){
            setCount(count- JSON.parse(num))
        }
    }
    let reset = ()=>{
        setCount(0);
    }

    let sty = {
        Display:"inline-block",
        Border:"2px"
    }
    return(
        <div>
            <div>
                <p>Count: {count}</p>
                <label htmlFor="inp">Step</label>&nbsp;
                <input type="number"  id="inp" min={4} max={25}  onChange={hnadleInp}/>
            </div>
            <div style={{margin:"15px"}}>
                <button onClick={increment}>Increment</button>&nbsp;&nbsp;
                <button onClick={decement}>Decement</button>&nbsp;&nbsp;
                <button onClick={reset}>Reset value</button>
            </div>
        </div>
    )
}