import { use } from "react"
import { BioContext, } from "./ContextApi"
//import { useBioContext } from "./ContextApi"

export default function Service() {
    // const {ser} =  use(BioContext)
    let ser;
    let t = true;
    if (t) {
        ({ ser } = use(BioContext));
    }
    return (
        <div>
            <p style={{ color: "yellowgreen" }}><b>{ser}</b></p>
        </div>
    )
}

{/* <Note>
    When a context is passed to use, it works similarly to useContext.
    While useContext must be called at the top level of your component,
    use can be called inside conditionals like if and loops like for.
    use is preferred over useContext because it is more flexible.
</Note> */}