import { useState } from "react";
import './ShortCircuit.css';

export default function ShortCircuit(){
    let [login, setLogin] = useState(true);
    let [user, setUser] = useState(null);
    let [clear, setClear]= useState("");
    return(
        <div className="main">
            <p>Today Exploring Short Circuit Evaluation</p>
             
            {/* first COndition */}
            {login &&<p>Your are LogIn</p>}
            {/* secound Condition */}
            {user ? `Hello ${user}`:"plz login"}
            <div>
                <button onClick={()=>{setLogin(!login)}}>Login state</button> &nbsp;&nbsp;
                <button onClick={()=>setUser("Nitish")}>Set User</button> &nbsp;&nbsp;
                <button onClick={()=>  setUser("")}>Clear</button> &nbsp;&nbsp;
            </div>
        </div>
    )
}