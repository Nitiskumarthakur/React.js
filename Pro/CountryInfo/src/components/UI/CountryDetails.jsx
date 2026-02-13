import axios from "axios";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export default function CountryDetails() {
    const countryName = useParams();
    console.log(countryName.id)

    const [country, setCountry] = useState([]);
    console.log(country);
     
    const getData = async () => {
        try {
            const res = await axios.get(`https://restcountries.com/v3.1/name/${countryName.id}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`);
            console.log(country.data);
            if (res.status === 200) {
                setCountry(res.data[0]);
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    // if(country === "") return <h1>Loadding........</h1>
    return (
        <section className="card country-details-card container">
            <div className="container-card bg-white-box">
                <div className="country-image grid grid-two-cols">
                    <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className="flag"
                    />
                    <div className="country-content">
                        <p className="card-title">{country.name.official}</p>

                        <div className="infoContainer">
                            {/* <p>
                                <span className="card-description"> Native Name: </span>
                                {Object.keys(country?.name?.nativName)
                                   .map((key)=> country?.name?.nativeName[key].common)
                                   .join(", ")
                                }
                            </p> */}
                            <p>
                                <span className="card-description"> Population:  </span>
                                 {country.population}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="country-card-backBtn">
                   <NavLink to="/country" className="backBtn">
                       <button>Go back</button>
                   </NavLink>
                </div>
                {/* <div>
                    <p>Niti</p>
                </div> */}
            </div>
        </section>
    )
}