import FooterJson from   "../../API/Footer.json"
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
export default function Footer() {

    const footerIcon = {
        IoMdMail: <IoMdMail />,
        FaPhoneAlt: <FaPhoneAlt />,
        FaLocationDot: <FaLocationDot />
    }
    return (
        <footer className='footer-section'>
            <div className='container grid grid-three-cols'>
                {
                    FooterJson.map((currData) => {
                        const { icon, title, details, id } = currData;
                        return (
                            <div className='footer-contact' key={id}  >
                                <div className='icon'>{footerIcon[icon]}</div>
                                <div className='footer-contact-text'>
                                    <p>{title}</p>
                                    <p>{details}</p>
                                </div>
                            </div>
                        );
                    })
                }
            </div>

            <div className='copyright-area'>
                <div className='container'>
                    <div className='grid grid-two-cols'>
                        <div className='copyright-text'>
                            <p>
                                Copyright &copy: 2026 All right Reserved 
                                <NavLink to="/about" className="Navlink">
                                    NitishThakur
                                </NavLink>
                            </p>
                        </div>
                        <div className='footer-menu'>
                            <ul>
                                <li>
                                    <NavLink to="/" className="Navlink">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://facebook.com" target='_blank' className="Navlink">FaceBook</NavLink>
                                </li>
                                <li>
                                    <NavLink to="Instagram.com" target='_blank' className="Navlink">Instagram</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contacts" className="Navlink">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}