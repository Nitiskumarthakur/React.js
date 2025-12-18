import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'

import { useState } from 'react';
export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    let apiUrl = "http://api.openweathermap.org/data/2.5/weather";
    let apiKey = "82af25e12bc888dd0a3d4422d7ea155c";

    let getInfo = async () => {
        try {
            let response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`);
            let responseJson = await response.json();
            console.log(responseJson);

            let result = {
                city: city,
                temp: responseJson.main.temp,
                tempMax: responseJson.main.temp_max,
                tempMin: responseJson.main.temp_min,
                humidity: responseJson.main.humidity,
                pressure: responseJson.main.pressure,
                feelLike: responseJson.main.feels_like,
                weather: responseJson.weather[0].description,
                windSpeed: responseJson.wind.speed,
                clouds: responseJson.clouds.all,
            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }

    }


    let handleForm = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
           setCity("");
        let dataInfo = await getInfo();
        updateInfo(dataInfo);
        }catch(err){
          //setErr("No such place in our Api!");
          setErr(alert("No such place in our Api!"));
        }
    }
    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField id="city" label=" Search City Name" variant="outlined" value={city} onChange={handleForm} />
                <br /><br />
                <Button variant="contained" type='submit'>Submit</Button>
                <h3> {err && <p>{err}</p> }</h3>
            </form>
        </div>
    )
}