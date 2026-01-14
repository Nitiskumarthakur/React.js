import { createContext, use, useState } from "react"

//Step 1.
export const ThemeContext = createContext();

//Step 2.
export const ThemeProvider = ({children})=>{

    const [theme, setTheme] = useState('light');
    const handleToggleTheme = ()=>{
        setTheme((preThem)=> (preThem == 'dark'? 'light' : 'dark'));
    }

    return(
        <ThemeContext.Provider value={{theme,handleToggleTheme}}>{children}</ThemeContext.Provider>
    )
} 