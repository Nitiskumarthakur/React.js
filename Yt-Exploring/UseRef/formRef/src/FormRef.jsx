import { useRef } from "react";

export default function FormRef() {

    // const username = document.getElementById("username");
    // const password = document.getElementById("password");

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleInp = (e) => {
        e.preventDefault();

        console.log(usernameRef.current.value, passwordRef.current.value);
    }
    return (
        <div>
            <h2>Learning useRef</h2>
            <form onSubmit={handleInp}>
                <input
                    type="text"
                    placeholder="usename"
                    id="username"
                    ref={usernameRef} 
                />
                <br></br><br />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    ref={passwordRef}
                    required 
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}