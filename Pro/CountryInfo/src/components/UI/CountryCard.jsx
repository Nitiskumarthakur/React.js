import  {NavLink} from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
export default function CountryCard({country}){
    const {name, flags, capital, region,population } = country;
    return(
        <li className="country-card card">
           <div className="container-card bg-white-box">
            <img src={flags.svg} alt={flags.alt} />
            <div className="countryInfo">
                <p className="card-title">{name.common}</p>
                <p><spna className="card-description">Capital: </spna>
                  {capital[0]}
                </p>
                <p><spna className="card-description">Region: </spna>
                  {region}
                </p>
                <p><spna className="card-description">Population: </spna>
                  {population.toLocaleString()}
                </p>
                 
                <NavLink to={`/country/${name.common}`}>
                    <button>Read More <FaLongArrowAltRight/> </button>
                </NavLink>
            </div>
           </div>
        </li>
    )
}