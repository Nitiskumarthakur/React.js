import '../App.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false)
    
    const handleButton =()=>{
        setShowMenu(!showMenu);
        // console.log(showMenu)
    }
    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="logo">
                        <h1>NITIShTHAKUR</h1>
                    </div>

                    <nav className={showMenu?"menu-mobile":"menu-web"}>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contacts</a></li>
                            <li><a href="#">Skill</a></li>
                             
                        </ul>
                    </nav>
                    <div className='ham-menu'>
                        <button onClick={handleButton}>
                            <GiHamburgerMenu/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}