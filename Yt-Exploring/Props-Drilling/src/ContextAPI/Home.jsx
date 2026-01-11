import { useContext } from "react"
import { BioContext } from "./ContextApi"
export default function Home(){

    const {myName} = useContext(BioContext);
    return (
        <div>
            <h2>Learn Context ApI</h2>
            <p>My name is {myName}. I am   year old.</p>
        </div>
    )
}