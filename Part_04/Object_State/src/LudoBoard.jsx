import { useState } from "react"
export default function LudoBoard(){
    const[Move, setMove] = useState({blue:0, yellow:0, green:0, red:0});
     
    const [arr, setArrr] = useState(["no move"]);

    let updateBlue = ()=>{
        //Move.blue += 1;
        console.log(`move ${Move.blue}`);
        //setMove({...Move, blue: Move.blue + 1});
        //Creating Callback Hell
        setMove((preMove)=>{
           return  {...preMove, blue: preMove.blue + 1};
        });
       

        //............ARRAY STATE CREAT............
        // arr.push("blue color");
        // setArrr(arr);
        // setArrr((preArr)=>{
        //     return  [...preArr, "blue Color"]
        // })

    }
    let updateYellow = ()=>{
        setMove((preMove)=>{
            return {...preMove, yellow:preMove.yellow + 1}
        })
    }
    let updateGreen = ()=>{
        setMove((preMove)=>{
            return {...preMove, green:preMove.green + 1}
        })
    }
    let updateRed = ()=>{
        setMove((preMove)=>{
            return {...preMove, red:preMove.red + 1}
        })
    }
    

    
    return (
        <div className="board">
            <p>Welcome Lucoboard</p>
            <p>{arr}</p>
            <p>Blue Move:{Move.blue}</p>
            <button style={{backgroundColor:"blue", color:"white"}} onClick={updateBlue}>+1</button>
            <p>yellow Move:{Move.yellow}</p>
            <button style={{backgroundColor:"yellow", color:"black"}} onClick={updateYellow}>+1</button>
            <p>Green Move:{Move.green}</p>
            <button style={{backgroundColor:"green", color:"white"}} onClick={updateGreen}>+1</button>
            <p>Red Move:{Move.red}</p>
            <button style={{backgroundColor:"red", color:"white"}} onClick={updateRed}>+1</button>
        </div>
    )
}