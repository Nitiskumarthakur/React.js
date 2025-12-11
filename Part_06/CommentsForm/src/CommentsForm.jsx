import { useState } from "react";
export default function CommentsForm({addNewComment}) {

    let [formData, setFormData] = useState({
        userName: "",
        remark: "",
        rating: 5
    });

    let handleInputChange = (event) =>{
        setFormData((currData) =>{
            return {
                ...currData, [event.target.name]:event.target.value
            }
        })
    }
    
    let handleSubmit = (event) =>{
        console.log(formData);
        addNewComment(formData)
        event.preventDefault();
    }
    return (
        <div>
            <h4>Given Comment!</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">UserName</label>
                <input placeholder="Enter Username" type="text" id="username" value={formData.userName} onChange={handleInputChange} name="userName"></input>
                <br></br><br></br>
                <label htmlFor="text">Feedback Area</label>
                <textarea placeholder="Enter feedback" id="text" value={formData.remark} onChange={handleInputChange} name="remark"></textarea>
                <br></br>
                <input type="number"  value={formData.rating} min={1} max={5} onChange={handleInputChange} name="rating"/>
                <br></br><br></br>
                <button>Submit</button>
                 
            </form>
        </div>
    );
}