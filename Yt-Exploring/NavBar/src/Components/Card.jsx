import './Card.css'
import api from './api.json'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
export default function Card() {
   
    const icon={
        FaLocationDot:<FaLocationDot/>,
        FaPhoneAlt:<FaPhoneAlt/>,
        IoMdMail:<IoMdMail/>,
    }

    return (
        <div className="Card">
            {
                api.map((curData) => {
                    return (
                        <div>
                            <div className='inner'>
                                <div className='icon'>
                                   {icon[curData.icon]}
                                </div>
                                <div className='ad'>
                                    <p>{curData.title}</p>
                                    <p>{curData.details}</p>
                                </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}