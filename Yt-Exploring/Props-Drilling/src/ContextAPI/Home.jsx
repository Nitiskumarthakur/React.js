import { useBioContext } from "./ContextApi";
export default function Home(){

    const {myName} =  useBioContext();
    return (
        <div>
            <h2>Learn Context ApI</h2>
            <p>My name is {myName}. I am   year old.</p>
        </div>
    )
}