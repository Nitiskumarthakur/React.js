import { useEffect, useState } from "react"
export default function FetchApi(){

    let [apidata, setApiData] = useState([]);

    // fetch(`https://jsonplaceholder.typicode.com/posts`)
    // .then((res)=>res.json())
    // .then((data)=> setApiData(data))
    // .catch((error)=>console.log(error))
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>res.json())
        .then((data)=>{setApiData(data)})
        .catch((error)=>console.log(error));
    },[])

    return(
        <div>
            <h2>Api data</h2>
            <ul>
                {
                    apidata.map((curr)=>{
                        return <li key={curr.id}>{curr.title}</li>
                    })
                }
            </ul>
        </div>
    );
};