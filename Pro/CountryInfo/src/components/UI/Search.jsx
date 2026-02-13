
export default function Search({search, setSearch, filter,setFilter,countries,setCountries}){
    
   const sortCountries = (value)=>{
      const sortCountry = [...countries].sort((a,b)=>{
        return value === "asc"
          ? a.name.common.localeCompare(b.name.common)
          : b.name.common.localeCompare(a.name.common);
        }); 
        setCountries(sortCountry);
        console.log("buttonClick");
   }

    return(
        <section className="section-searchFilter container">
            <input
               type="text"
               placeholder="search"
               value={search}
               onChange={(e)=>setSearch(e.target.value)}
            />
            
            <div>
                <button onClick={()=>sortCountries("asc")}>Asc</button>
            </div>
            <div>
                <button onClick={()=>sortCountries("dec")}>Dec</button>
            </div>

            <div>
                <select className="select-section" value={filter} onChange={(e)=>setFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="India">India</option>
                    <option value="Afiraca">Afiraca</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div> 
             
        </section>
    )
}