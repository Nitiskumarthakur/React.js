import SearchBox from './SearchBox'
import InfoBox from "./InfoBox"
import { useState } from 'react'
export default function WeatherApp() {

    let [weatherInfo, setWeatherInfo] = useState({
        tempMax: 25.3,
        tempMin: 21.9,
        windSpeed: "12h/k",
        city: "Delhi",
        feelLike: 22.45,
        humidity: 40,
        pressure: 1016,
        temp: 23.05,
        clouds:41,
    });

    let updateInfo = ((newResult) => {
        setWeatherInfo(newResult);
    })

    return (
        <div style={{ textAlign: "center", color: "blue" }}>
            <h2>Weather Application In React</h2>

            <SearchBox updateInfo={updateInfo} />     {/* Function Props   */}
             <img src="src/assets/" alt="" />
            <InfoBox info={weatherInfo} />
        </div>
    )
}