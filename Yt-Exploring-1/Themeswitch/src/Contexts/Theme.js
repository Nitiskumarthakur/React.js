import { useContext,createContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme : ()=>{},
    lightTheme: ()=>{}
})
export const ThemeProvider = ThemeContext.Provider

//Create custom Hook 
export default function useTheme(){
    return useContext(ThemeContext)
}
