import CountryData from '../API/countryData.json'
export default function About() {
    console.log(CountryData)
    return (
        <section className='section-about container'>
            <h2 className='container-title'>
                Here are the Interesting Facts <br />
                we're proud of
            </h2>

            <div className='gradient-cards'>
                 
                    {
                        CountryData.map((currData) => {

                            const {id, countryName, capital, population, interestingFact, popularGame} = currData;

                            return (
                                <div className='card' key={id}>
                                    <div className='container-card bg-blue-box'>
                                    <p className='card-title'>{countryName}</p>
                                    <p>
                                        <span className='card-description'>
                                            <b>Capital:</b> {capital}
                                        </span>
                                    </p>
                                    <p>
                                        <span className='card-description'>
                                            <b>Population:</b> {population}
                                        </span>
                                    </p>
                                    <p>
                                        <span className='card-description'>
                                            <b>InterestingFact:</b> {interestingFact}
                                        </span>
                                    </p>
                                    <p>
                                        <span className='card-description'>
                                            <b>Game:</b> {popularGame}
                                        </span>
                                    </p>
                                     
                                </div>
                                </div>
                            )
                        })
                    }
                 
            </div>
        </section>
    )
}