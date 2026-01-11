import { useContext } from "react"
import { BioContext } from "./ContextApi"

export default function About(){
    
    const {myAge} = useContext(BioContext);

    return(
        <div>
            <p><b>Here About.jsx</b> - I am {myAge} year old.</p>
        </div>
    )
}