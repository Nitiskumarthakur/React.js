import { useState } from "react";
export default function Form() {

    let [formData, setFromData] = useState([{ fullName: "", userName: "", password:"" }]);

    //-------Show on screen-----
    let [submitData, setSubmitData] = useState('');

    let handleForm = (event) => {
        //let onBox = event.target.name;
        //let value = event.target.value;

        setFromData((curr) => {
            return {
                ...curr, [event.target.name]: event.target.value
            }
        })
        //console.log(onBox);


    }
    let submitForm = (event) => {
        event.preventDefault();
        setFromData({
            fullName: "",
            userName: "",
            password:"",
        })
        setSubmitData(formData);
        //console.log(formData.fullName);
        //console.log(formData.userName);
        //console.log(formData.password)
    }
    return (
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Full Name</label>
                <input
                    onChange={handleForm}
                    value={formData.fullName}
                    name="fullName"
                    id="name"
                    type="text"
                    placeholder="Enter you Name" />
                <br></br><br></br>
                <label htmlFor="username">UserName</label>
                <input
                    onChange={handleForm}
                    value={formData.userName}
                    name="userName"
                    id="username"
                    type="text"
                    placeholder="Enter you userName" />
                <br></br><br></br>
                <label htmlFor="pass">Password</label>
                <input
                    onChange={handleForm}
                    value={formData.password}
                    name="password"
                    id="pass"
                    type="password"
                    placeholder="Enter password" />
                <br></br><br></br>
                <button>Submit</button>

                {/* show on Display */}
                {submitData && (
                   <div>
                       <p><span>Full Name: </span>{submitData.fullName}</p>
                       <p><span>User Name: </span>{submitData.userName}</p>
                       <p><span>User Password:</span>{submitData.password}</p>
                   </div>
                ) }
            </form>
        </div>
    );
}