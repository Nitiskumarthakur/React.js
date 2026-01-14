import { memo, useRef } from "react"

const CountMemo = ()=>{
    const renderCount = useRef(0)
    console.log(renderCount);
    return(
        <div>
            <p><b>Child-Component:</b> This part isn CountMemo</p>
            <p>Nothing changed here Ive now Rendered</p>
            <span><b>{renderCount.current++}</b> Time (s)</span>
        </div>
    )
}

export default memo(CountMemo);