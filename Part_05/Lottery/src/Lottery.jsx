import { useState } from "react";
import { genTricket, sum } from "./Helper";
import './Lottery.css'
import Ticket from "./Ticket";

export default function Lottery({n=3, winningSum=15}){
    let[ticket, setTicket] = useState(genTricket(n));
    let isWinning = sum(ticket) === winningSum;
    // console.log(isWin);
    // console.log(sum(ticket));
    
    let buyTricket = ()=>{
        setTicket(genTricket(n));//Adding Number
    }

    return (
        <div>
            <h3>Welcome To Lottery Game!</h3>
             <Ticket ticket={ticket}/>
            <button onClick={buyTricket}>Buy Tricket</button>
            <h3>{isWinning  && "Congratulation, You won!"}</h3>
        </div>
    );
}