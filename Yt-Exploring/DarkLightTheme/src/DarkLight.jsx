import { use } from "react"
import { ThemeContext } from "./DarkLightThem"

export const DarkLight =()=>{
    const {theme, handleToggleTheme} = use(ThemeContext)
    return(
        <div style={{
                color:theme=='dark'?"white":"black",
                backgroundColor:theme=='dark'?'black':'white',
                width:"100%",
                height:"100vh",
                margin:"0px",
                padding:"0px",
                boxSizing:"border-box"
            }}>
            <h1 >Dark Light Mode Website</h1>
            <p> Hello !! My React v19 fans👌</p>
            <button onClick={handleToggleTheme}>
                {theme=="dark"?"Switch to Light Mode":"Switch to Dark Mode"}
            </button>
        </div>
    )
}