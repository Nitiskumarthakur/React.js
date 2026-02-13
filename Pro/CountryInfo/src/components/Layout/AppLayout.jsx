import { Outlet } from "react-router-dom";

import Header from "../UI/Header";
import Footer from "../UI/Footer";
export default function AppLayout() {
    return (
        <div>
            <Header />
            <Outlet/>
            <Footer/>
        </div>
    );
}
