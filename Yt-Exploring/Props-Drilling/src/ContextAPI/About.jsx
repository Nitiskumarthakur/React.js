
import {  useBioContext } from "./ContextApi"

export default function About(){
    
    const {myAge} = useBioContext()

    return(
        <div>
            <p><b>Here About.jsx</b> - I am {myAge} year old.</p>
        </div>
    )
}