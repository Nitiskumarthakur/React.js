import { useState } from "react"
export default function LIKEBUTTON(){

    const[isLike, setIsLike] = useState(true);
    const[click, setClick] = useState(0);
    let toggleLike = ()=>{
        setIsLike(!isLike);
        setClick(click+1);
    }
    let sty={color:"red"};
    return(
        <div>
            <p>click ={click}</p>
            <p onClick={toggleLike}>
                {isLike?(<i className="fa-regular fa-heart"></i>):(<i class="fa-solid fa-heart" style={sty}></i>)}
            </p>
        </div>
    )
}

