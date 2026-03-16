import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../features/searchSlice";
import Tabs from "./Tabs";

export default function SearchBar() {

    const [searchData, setSearchData] = useState("");
    const dispatch = useDispatch();
   
    const data =  useSelector((state)=>state.search.query);
    function handleInp(e){
        e.preventDefault();
      
        dispatch(setQuery(searchData));
        setSearchData('');  
    }
    return (
        <div className=" bg-gray-900">
            <form onSubmit={handleInp} className="flex gap-5 p-10 px-40 ">
                <input
                    className="w-full border-2 px-5 py-2 text-xl rounded outline-none"
                    type="text"
                    placeholder="Search anything..........."
                    value={searchData}
                    required
                    onChange={(e) => setSearchData(e.target.value)}
                />
                <button
                    typeof="submit"
                    className="border-2 px-5 py-2 text-xl font-medium rounded outline-none  bg-green-400 active:scale-95 cursor-pointer uppercase"
                >Search</button>
            </form>
        </div>
    )
}