import { useState,useEffect } from "react"
export default function UseDateTime(){

    let [date, setDate] = useState();
    
    useEffect(()=>{
        setInterval(()=>{
           const updateTime  = new Date();
           setDate(updateTime.toLocaleTimeString());
        },1000)
    },[])

    return (
        <div>
           <p>Date: {date}</p>
        </div>
    )
}