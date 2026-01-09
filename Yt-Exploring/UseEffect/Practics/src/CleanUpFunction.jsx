//Important Topic.
import { useEffect, useState } from "react"
export default function CleanUpFunction() {

    let [count, setCount] = useState(0)

    useEffect(() => {
        let timer = setInterval(() => {
            setCount((prev) => prev + 1);
        }, 1000)

        return ()=> clearInterval(timer);
    }, [])
    return (
        <div>
            <h2 >CleaUp Function <span style={{ color: "red" }}>important</span></h2>
            <h1>Count: {count}</h1>
        </div>
    )
}