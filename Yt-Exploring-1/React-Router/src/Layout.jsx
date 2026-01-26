import Header from "./Components/Header/Header"
import Footer from "./Components/Fooder/Fooder"
import { Outlet } from "react-router-dom"
export default function Layout(){
    return(
        <div>
            <Header/>
            <Outlet/>
            <Footer/> 
        </div>
    )
}