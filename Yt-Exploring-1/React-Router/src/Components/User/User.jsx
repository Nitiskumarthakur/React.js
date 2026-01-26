import { useParams } from "react-router-dom"
export default function User(){

    const {userId} = useParams();
    return(
        <div className="bg-gray-500 text-center text-2xl text-yellow-500 font-semibold m-4">
            <p>UserID : {userId}</p>
        </div>
    )
}