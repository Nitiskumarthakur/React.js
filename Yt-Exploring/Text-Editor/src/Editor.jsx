import { useState } from "react";

export default function Editor(){

    const [inp, setInp] = useState("Nitish thakur");

    const [edit, setEdit] = useState(false);
    return(
        <div>
            <input 
               type="text"
               value={inp}
               onChange={(e)=>setInp(e.target.value)}
               readOnly={!edit}
               
            //    style={{border:{edit}?"none":"2px solid red"}}
            />
            <button onClick={()=>setEdit((e)=>!e)}>{edit?"Complete Edit":"Click for Edit"}</button>
        </div>
    )
}