import { NavLink, useRouteError } from "react-router-dom"

export default function ErrorPage(){
   
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            <h1>Error Page</h1>
            <p>{error.data}</p>
            <p style={{color:"red"}}>{error.error.message}</p>

            <NavLink>
                <button to="/">Go Back</button>
            </NavLink>
        </div>
    )
}
