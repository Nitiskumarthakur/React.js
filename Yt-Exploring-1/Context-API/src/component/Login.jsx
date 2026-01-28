import { useState,useContext } from "react"
import UserContext from "../context/UserContext";


export default function Login(){

    const [name, setName] = useState('');
    const [password, setPassword] = useState('')
    

    const {setUser} = useContext(UserContext);

    const handleInp = (e)=>{
        e.preventDefault();
        console.log(name);
        console.log(password);
        setUser({name, password});
    }
    
    

    return(
        <div>
            <h2>Login page!</h2>
            <label htmlFor="user">userName </label>
            <input 
               type="text" 
               placeholder="name" 
               id="user"
               value={name}
               onChange={(e)=>setName(e.target.value)}
            /><br></br><br></br>
            <label htmlFor="pass">password </label>
            <input 
               type="password" 
               placeholder="password" 
               id="pass"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
            /><br></br><br></br>
            <button onClick={handleInp}>Submit</button>
        </div>
    )
}