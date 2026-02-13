import { getCountryData } from '../API/PostApi';
import CountryCard from '../components/UI/CountryCard';
import { useState, useEffect, useTransition } from 'react';
import Loader from '../components/UI/Loader';
import Search from '../components/UI/Search';

export default function Country() {

   const [isPending, startTransition] = useTransition();
   const [countries, setCountries] = useState([]);

   const [search, setSearch] = useState("");
   const [filter, setFilter] = useState("All");
   useEffect(() => {
      startTransition(async () => {
         const data = await getCountryData();
         setCountries(data.data);
      });
   }, [])

   //console.log(countries)
   console.log(search);
   console.log(filter);
   // console.log(Array.isArray(countries));
   if (isPending) return <Loader />
    
   // Here the main Logic of serch Functionality.
   const searchCountry = (country)=>{
      if(search){
         return country.name.common.toLowerCase().includes(search.toLowerCase());
      }
      return country;
   
   }
   const filterRegion = (country)=>{
      if(filter === "All") return country;
      return country.region === filter;
   }
   const filterCountries = countries.filter((country)=> searchCountry(country) && filterRegion(country));


   return (
      <section className='country-section'>
         
         <Search 
            search={search} 
            setSearch={setSearch} 
            filter= {filter}
            setFilter={setFilter}
            countries={countries} 
            setCountries={setCountries}
         />
         <ul className='grid grid-four-cols'>
            {
               filterCountries.map((currCountry, index) => {
                  return <CountryCard country={currCountry} key={index} />
               })
            }
         </ul>
      </section>
   )
}


