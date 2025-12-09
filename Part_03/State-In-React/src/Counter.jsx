import { useState } from "react";
export default function Counter(){
    
    const [count, setcount] = useState(0); //inilialization.
    //console.log(`count = ${count}`);

    function incCount(){ 
        //setcount(count+1);//re-render
        setcount((currCount) =>{
            return currCount+1
        });
        setcount((currCount) =>{
            return currCount+1
        });
    }
    return (
        <div>
          <h3>Count = {count}</h3>
          <button onClick={incCount}>Increas Count</button>
        </div>
    )
}