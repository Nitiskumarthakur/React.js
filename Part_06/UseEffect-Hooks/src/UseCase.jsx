import { useState,useEffect } from "react";
import './UseCase.css'
export default function UseCase(){
    let [joke, setjoke] = useState({});

    let url = "https://official-joke-api.appspot.com/random_joke";
    let getJoke = async()=>{
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setjoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    }
    
    useEffect(()=>{
        async function getFirstJoke(){
            let response = await fetch(url);
            let jsonResponse = await response.json();
            //console.log(jsonResponse);
            setjoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
        }
        getFirstJoke();
    },[]);
    return(
        <div>
            <div className="joke">
                <h2 style={{color:"red",fontSize:"4rem"}}>Joke!</h2>
                <div className="jokeIn">
                    <h2>{joke.setup}</h2>
                    <h3>{joke.punchline}</h3>
                </div>
                <button onClick={getJoke} className="jokeBtn">Click Here!</button>
            </div>    
        </div>
    )
}