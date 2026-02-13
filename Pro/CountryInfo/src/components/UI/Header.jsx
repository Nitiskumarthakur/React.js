 
import { NavLink } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { useState } from 'react';
import { flushSync } from 'react-dom';


export default function Header() {
  
  const [show, setShow] = useState(false);
  const handleMenuBtn = ()=>{
    setShow(!show);
  }
  return (
    <header>
      <div className='container'>
        <div className='grid navbar-grid'>
          <div className='Logo'>
            <NavLink to='/' className="Navlink"><h1>Nitish</h1></NavLink>
          </div>


          <nav className={show ? "menu-mobile":"menu-web"}>
            <ul>
                <li>
                   <NavLink to="/" className="Navlink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="Navlink">About</NavLink>
                </li>
                <li>
                    <NavLink to="/country" className="Navlink">Contry</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" className="Navlink">Contact</NavLink>
                </li>
            </ul>
          </nav>

          <div className='ham-menu'>
            <button onClick={handleMenuBtn}><IoMenuOutline /></button>
          </div>

        </div>
      </div>
    </header>
  );
}
