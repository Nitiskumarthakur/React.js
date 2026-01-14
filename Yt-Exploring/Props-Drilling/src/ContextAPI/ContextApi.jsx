//ContextAPI: is a build-in Feature in react that allow you to share data and state
// Across component without having to pass manually at every level of the componet three
// a proble know as "Props drilling".
//--------------------------------------------------------
// import { createContext, useContext } from 'react'
// similar to useContext == use  (hooks)
import { createContext, use } from "react"

//Step 1.
export const BioContext = createContext();

//Step 2.
export const BioProvider = ({children})=>{

    const myName = "Nitish Thakur"
    const myAge = 21;
    const ser = "Here Service for Api"

    return(
        <BioContext.Provider value={{myAge, myName, ser}}>{children}</BioContext.Provider>
    )
}

// Create Custom Hooks
export const useBioContext =()=>{
    const context = use(BioContext);
    return context;
}



