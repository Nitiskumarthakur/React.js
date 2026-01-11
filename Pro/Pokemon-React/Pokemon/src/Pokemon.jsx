import { useEffect, useState } from 'react';
import './pokemon.css'
import PokemonCard from './PokemonCard.jsx'
//import { fetchPokemon } from './PokemonApi';
export default function Pokemon() {

    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoding] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemon/?limit=50";
    const fetchPokemon = async () => {
        try {
            const res = await fetch(API);
            const data = await res.json();

            const detailedPokemonData = data.results.map(async (curPokemon) => {
                const res = await fetch(curPokemon.url);
                const detailedData = await res.json();
                return detailedData;
            });
            const fullPokemonRes = await Promise.all(detailedPokemonData);
            console.log(fullPokemonRes);
            setPokemon(fullPokemonRes);


        } catch (e) {
            setError(e);
        }
    }
    const load = () => {
        setTimeout(() => {
            setLoding(false);
        }, [1000])
    }
    useEffect(() => {
        load();
        fetchPokemon();
        // //<fetchPokemon dataPokemon={setPokemon}/>
        // setPokemon(fetchPokemon());
    }, [])

    // Serch Functionality
    const searchData = pokemon.filter((currPokemon) =>
        currPokemon.name.toLowerCase().includes(search.toLowerCase()));


    if (loading) {
        return (
            <div style={{ textAlign: "center" }}>
                <h1>Loadding.........</h1>
            </div>
        )
    }
    if (error) {
        return (
            <div style={{ textAlign: "center", color: "red" }}>
                <h2>Error: {error.message}</h2>
            </div>
        )
    }

    return (
        <div>
            <section className="container">
                <header>
                    <h1>Lets catch Poke`mon</h1>
                </header>
                <div className='pokemon-search'>
                    <input
                        type="text"
                        placeholder='Search pokemon'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div>
                    <ul className='cards'>
                        {
                            searchData.map((currpokemon) => {
                                return (
                                    <PokemonCard key={currpokemon.id} pokemonData={currpokemon} />
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </div>
    )
}
