import axios from "axios"
import {  useEffect, useState } from "react";
import Card from "./Card";

export default function MovieApi() {
    
    const [data, setData] = useState([]);
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    
    const [movie, setMovie ] = useState([])
    const movieAPI = "https://api.tvmaze.com/shows?q=batman"

    const getMovieData = async() => {
        try {
        //    const respose =  await axios.get(API);
        //    console.log(respose.data.Search);
        //    setData(respose.data.Search);

           const movieRes = await axios.get(movieAPI);
           console.log(movieRes);
           const sw = movieRes.data.slice(0, 10);
           setMovie(sw);

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(()=>{
        getMovieData();
    },[])
    return (
        <div>
          {
            movie.map((da)=>(
                <div key={da.id}>
                    {/* <p>{da.name}</p>
                    <img src={da.image.medium} alt="#" /> */}
                    <Card image= {da.image.medium} name={da.name}/>
                </div>
            ))
          }
        </div>
    )
}