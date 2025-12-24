import { useState } from "react"
import './OriginalRegistrationForm.css'
export default function OriginalRegistrationForm() {

    let [data, setData] = useState({
        fullName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNum: "",
    });
    //show data on the screen
    let [show, setShow] = useState();

    let handleInp = (event) => {
        setData((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }
    let submitForm = (e) => {
        e.preventDefault();
        setShow(data);
        console.log(data);
        setData({
            fullName: "",
            lastName: "",
            password: "",
            phoneNum: "",
            email: ""
        })
    }
    return (
        <div className="container">
            <form className="formContainer" onSubmit={submitForm}>
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    name="fullName"
                    autoComplete="fullName"
                    id="fullName"
                    value={data.fullName}
                    onChange={handleInp}
                    placeholder="Enter you Full Name"
                    required
                />
                <label htmlFor="lastName">Last Name </label>
                <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    id="lastName"
                    value={data.lastName}
                    onChange={handleInp}
                    placeholder="Enter last name"
                    required
                />
                <label htmlFor="email-user">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email-user"
                    value={data.email}
                    autoComplete="username"
                    placeholder="Enter you Email"
                    onChange={handleInp}
                    required
                />
                <label htmlFor="pass">password</label>
                <input
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    id="pass"
                    value={data.password}
                    onChange={handleInp}
                    placeholder="Enter you Password"
                    required
                />
                <label htmlFor="num">Enter Number</label>
                <input
                    type="number"
                    name="phoneNum"
                    autoComplete="number"
                    id="num"
                    value={data.phoneNum}
                    placeholder="Enter you Phone"
                    onChange={handleInp}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}