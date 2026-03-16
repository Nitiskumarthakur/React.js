import { useSelector } from "react-redux"
import CollectionCard from "../componets/CollectionCard";
import { useDispatch } from "react-redux";
import { clearCollection } from "../features/collectionSlice";

export default function CollectionPage() {

    const collection = useSelector((state) => state.collection.items);
     
    const dispatch = useDispatch();

    const clear = ()=>{
        dispatch(clearCollection());
    }

    return (
        <div className="overflow-auto px-10   pl-42 mt-10 mr-22">
           {collection.length>0 ? <div className="flex justify-between">
                <h2 className="font-medium text-2xl"> Your Collection</h2>
                <button className="bg-red-500 text-2xl font-medium w-45 p-1 text-center rounded active:scale-95 mr-8" onClick={()=>{clear()}}>Clear Collection</button>
            </div>:<h2 className="text-2xl font-medium text-center">Your Collection Empty</h2>}
            <div className="flex justify-start flex-wrap gap-5  mt-10">
                {collection.map((elm, idx) => {
                    return <div key={idx}><CollectionCard item={elm} /></div>
                })}
            </div>
        </div>
    )
}