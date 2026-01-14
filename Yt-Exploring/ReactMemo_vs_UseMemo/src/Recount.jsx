import { memo } from "react";
import { useRef } from "react"

const Recount = ({bioData})=>{
    let renderCount = useRef(0);
    return(
        <div>
            <p><b>Child-Component:</b> This part isn CountMemo</p>
            <p>Nothing changed here Ive now Rendered</p>
            <span style={{color:"red"}}><b>{renderCount.current++}</b> Time (s)</span>
            <p style={{color:"blue"}}>My name {bioData.name} and age {bioData.age}</p>
        </div>
    )
}
export default memo(Recount);