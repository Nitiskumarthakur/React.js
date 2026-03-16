import { useDispatch, } from "react-redux";
import { addCollection } from "../features/collectionSlice";
import { addToast } from "../features/collectionSlice";


export default function ResultCard({ item }) {
    
    const dispatch = useDispatch();

    const addToCollection = (item)=>{
         
        dispatch(addCollection(item));
        
        dispatch(addToast());

        //console.log("addTOCOllection");
    }

    return (
        <div className="h-70 w-[15vw] relative bg-white rounded-xl overflow-hidden  ">
            <a href={item.url} className="h-full">
                {item.type == 'Photo' ? <img className="h-full w-full object-over object-center" src={item.src} alt="" /> : ''}
                {item.type == 'Video' ? <video className="h-full w-full object-over object-center" autoPlay loop muted src={item.src}></video> : ''}
                {item.type == 'Gifs' ? <img className="h-full w-full object-over object-center" src={item.src} alt="" /> : ''}
            </a>
            <div className=" flex justify-between gap-2 items-center w-full px-6 py-4 absolute bottom-0 text-white">
                <h2 className="text-xl font-semibold capitalize overflow-hidden w-[14ch] truncate">{item.title}</h2>
                <button 
                  onClick={()=> {addToCollection(item)}}
                  className="bg-indigo-600 active:scale-95 text-white rounded px-3 py-1 cursor-pointer"
                >save</button>
            </div>
        </div>
    )
}