import { useEffect, useState } from "react"
let countkey = "key";
export default function UseState(){
    
    let [count, setCount ] = useState(0);
      
    let inCount = ()=>{
        setCount(count +1);// Not updated in the count value Inner.
        console.log("inner:", count)
    }
    //---Explain:- if count value "0" then outer count value=0;
    //  if function run the outer count value in 1 And inner count value 0;
    console.log("outer: ", count)
    return(
        <div>
            <h3>useState used !</h3>
          <p>Count = {count}</p>
           
          <button onClick={inCount}>Count</button>
        </div>
    )
}

