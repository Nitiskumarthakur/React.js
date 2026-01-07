import { useEffect, useState } from "react"
import './pocemon.css'

export default function Pocemon() {

    const [pocemon, setPocemon] = useState(null);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState(null);

    let APIData = "https://pokeapi.co/api/v2/pokemon/pikachu";
     
    //------Promises
    // const fetchPocemon = () => {
    //     fetch(APIData)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setPocemon(data);
    //             //setLoding(false);
    //         })
    //         .catch((error) =>{
    //             //setLoding(false);
    //             setError(error);
    //         });
    // }
    
    //------Async And await
    const fetchPocemon= async ()=>{
        try{
            const res = await fetch(APIData);
            const data = await res.json();
            setPocemon(data);
        }catch(e){
           setError(e);
        }
    }
    useEffect(() => {
        load();
        fetchPocemon();
    }, [])
    
    const load =()=>{
        setTimeout(()=>{
          setLoding(false);
        },[1000])
    }
    if(loading){
        return(
            <div style={{textAlign:"center" }}>
                <h1>Loadding.........</h1>
            </div>
        )
    }
    if(error){
        return(
            <div style={{textAlign:"center"}}>
                <h2>error: {error.message}</h2>
            </div>
        )
    }

    return (
        <div>
            <section className="container">
                <header>
                    <h1>Lets catch Poke`mon</h1>
                </header>
                <ul className="pokemon-card">
                    <li className="pokemon-demo">
                        <figure>
                            <img 
                               src={pocemon.sprites.other.dream_world.front_default}
                               alt={pocemon.name}
                               className="pokemon-image"
                            />
                        </figure>
                        <h1>{pocemon.name}</h1>
                        <div className="grid-three-cols">
                            <p className="pokemon-info">
                                Height: <span>{pocemon.height}</span>
                            </p>
                            <p className="pokemon-info">
                                Weight: <span>{pocemon.weight}</span>
                            </p>
                            <p className="pokemon-info">
                                Speed: <span>{pocemon.stats[5].base_stat}</span>
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}
