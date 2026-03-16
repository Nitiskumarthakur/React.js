import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [active, setActive] = useState('')

    return (
        <div className='flex justify-between items-center py-4 px-40 bg-[rgb(12,43,78)]'>
            <h2 className='font-bold text-xl text-center'>Media Search</h2>
            <div className="flex gap-8 text-2xl item-center">
                <Link className={` ${active == 'search'?'bg-green-400':'bg-blue-600'}  rounded p-1 w-30 text-center active:scale-95`} to='/home' onClick={()=>setActive('search')}>Search</Link>
                <Link className={` ${active == 'collection'?'bg-green-400':'bg-blue-600'}  rounded p-1 w-30 text-center active:scale-95`}  to='/collection'  onClick={()=>setActive('collection')}>Collection</Link>
            </div>
        </div>
    )
}