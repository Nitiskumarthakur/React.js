import { useRef } from "react"

export default function ChildToPerent(){

    const username = useRef(null);
    const password = useRef(null);

    const handleInp = (e)=>{
       e.preventDefault();
       console.log(username.current.value, password.current.value);
    }
    return(
        <div>
            <form onSubmit={handleInp}>
                <Username label="username" ref={username} id="username"/>
                <br></br>
                <Password label="password" ref={password} id="password"/> 
                <button>Submit</button>
            </form>
        </div>
    )
}

export  const Username = (props)=>{
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" ref={props.ref}/>
        </div>
    )
}
export const Password = (props)=>{
    return(
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="password"  ref={props.ref}/>
        </div>
    )
}