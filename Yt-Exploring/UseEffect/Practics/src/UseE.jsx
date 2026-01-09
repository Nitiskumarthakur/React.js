import { useEffect, useState } from "react";
export default function UseE(){

    let [countX, setCountX] = useState(0);
    let  [countY, setCountY] = useState(0);

    let btnX = ()=>{
        setCountX(countX += 1);
    }
    let btnY = ()=>{
        setCountY(countY +=1);
    }
    useEffect(()=>{
        console.log(`countY = `,countY);
    },[countY])
    useEffect(()=>{
        console.log(`countX = `,countX);
    },[countX])
    //------> [] means one time runing useEffect() 
    // if any cash argument  pass in brecket as [countX] then change of the countX will be Re-render.
    return (
        <div>
            <p>countX: {countX}</p>
            <p>countY: {countY}</p>
            <button onClick={btnY}>Button Y</button> &nbsp;
            <button onClick={btnX}>Button X</button>
        </div>
    )
}