import { useId, useRef } from "react"

export default function UseId() {
   
    //Use useID
    const userID = useId();
    const passId = useId();

    //Use UseRef
    const userRef = useRef(null);
    const passRef = useRef(null);

    const handleInp = (e) => {
        e.preventDefault();
        console.log("Username: ",userRef.current.value,",", "Password: ",passRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleInp}>
                <label htmlFor={userID}>UsarName</label>
                <input
                    type="text"
                    id={userID}
                    placeholder="username"
                    ref={userRef}
                    autoComplete="username"
                />
                <br></br><br></br>
                <label htmlFor={passId}>PassWord</label>
                <input
                    type="password"
                    id={passId}
                    placeholder="password"
                    ref={passRef}
                    autoComplete="current-password"
                />
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    )
}