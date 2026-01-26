//import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"

export default function Github() {
    
    
    // const [data, setData]= useState("");

    // useEffect(()=>{
    //    fetch(`https://api.github.com/users/Nitiskumarthakur`)
    //    .then((res)=>res.json())
    //    .then((data)=>setData(data));
    // },[])

    const data  = useLoaderData();

    return (
        <div className="flex items-center justify-center">
            <div className="justify-between bg-blue-500">
                <p className="text-center">Rspo: {data?.public_repos}</p>
                <img src={data?.avatar_url} alt="#" className="w-45 h-45 m-4"/>
            </div>
        </div>
    )
}

export const githubInfo = async ()=>{
    const res = await fetch(`https://api.github.com/users/Nitiskumarthakur`)
    return res.json();
}