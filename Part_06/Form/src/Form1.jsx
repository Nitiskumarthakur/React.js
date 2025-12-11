import { useState } from "react";

export default function From1() {
    
    let [formData, setformData] = useState({
        fullName:"",
        userName:"",
        password:""
    });

    let handleInputChange = (event)=>{
        let fields = event.target.name; // find fields Name ;kis input bax per click huaa hai.
        let newValue = event.target.value; // acess value.
        
        setformData((currData)=>{
            //currData[fields] = newValue;
            return{ 
                ...currData, [fields]:newValue
            }
        });
    };

    let handleForm = (event)=>{
        event.preventDefault();
        console.log(formData);
        setformData({
            fullName:"",
            userName:"",
            password:""
        });
    }
    return (
        <div>
            <form onSubmit={handleForm}>
                <label htmlFor="fullname">fullName</label>
                <input
                    name="fullName"
                    id="fullname"
                    type="text"
                    placeholder="Enter your userName"
                    onChange={handleInputChange}
                    value={formData.fullName}>
                       
                </input>
                <br></br><br></br>
                <label htmlFor="username">userName</label>
                <input
                    name="userName"
                    id="username"
                    type="text"
                    placeholder="Enter your userName"
                    onChange={handleInputChange}
                    value={formData.userName}>    
                </input>
                <br></br><br></br>
                <label htmlFor="password">password</label>
                <input
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    value={formData.password}>    
                </input>
                <br></br><br></br>
                <button>Submit</button>
            </form>
        </div>
    );
}