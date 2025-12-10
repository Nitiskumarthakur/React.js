import { useState } from "react"
export default function LotteryGame(){
    let [genNum, setGenNum] = useState();
    let [genAdd, setGenAdd] = useState();

    let genBtn = ()=>{
        let randomNum = Math.floor((Math.random()*900)+100);
        let strRandomNum = randomNum.toString();
        //console.log(randomNum);
        setGenNum(()=>{
            return randomNum;
        });
        let sum=0;
        for(let i=0;i<strRandomNum.length;i++){
            sum +=parseInt(strRandomNum[i]);
        }
        setGenAdd(()=>{
            return sum;
        });
    }
    
    return(
        <div>
            <h2>Welcome to LotteryGame</h2>
            <p>Generate  Number <button onClick={genBtn}>Click Here</button></p>
            <p>Generate Random Number: {genNum}</p>
            <p>Generate Number Add:{genAdd}</p>
        </div>
    )
}