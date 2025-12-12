import { useState, useEffect } from "react"
export default function UseEffect(){

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let addNumX =()=>{
        setCountx((currCount)=>currCount + 1)
    };

    let addNumY =()=>{
        setCounty((currCount)=>currCount + 1)
    };

    useEffect(function sideEffect(){
        console.log("This is the side effect");
    },[countx,county]);
    return (
        <div>
            <h2>Learing UseEffect Hooks!</h2>
            <p>countX: {countx}</p>
            <button onClick={addNumX}>+1</button>
            <p>countY: {county}</p>
            <button onClick={addNumY}>+1</button>
        </div>
    )
}