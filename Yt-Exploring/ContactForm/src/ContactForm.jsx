import { useState } from "react"
import './ContactForm.css'
export default function ContactForm(){

    let [data, setData] = useState({
        username:"",
        Email:"",
        textArea:""
    });
    
    let handleForm =(event)=>{
        setData((prev)=>({
            ...prev, [event.target.name]:event.target.value
        }))
    }
    
    let handleSumit =(event)=>{
        event.preventDefault();
        console.log(data);
        setData({
            username:"",
            Email:"",
            textArea:""
        })
    }

    return(
        <div className="container">
            <h1>Contact Form</h1>
            <form onSubmit={handleSumit}>
                <label htmlFor="username">Username</label>
                <input 
                   type="text" 
                   name="username" 
                   id="username" 
                   placeholder="username"
                   value={data.username}
                   required
                   autoComplete="off"
                   onChange={handleForm}
                />
                <label htmlFor="Email">Email</label>
                <input 
                   type="email"
                   name="Email"
                   id="Email"
                   placeholder="username"
                   value={data.Email}
                   required
                   autoComplete="off"
                   onChange={handleForm}
                />
                <label htmlFor="text">TextArea</label>
                <textarea
                    type="textArea"
                    name="textArea"
                    id="text"
                    placeholder="Write Something"
                    required
                    autoComplete="off"
                    value={data.textArea}
                    onChange={handleForm}
                />

                <button type="submit">Send Message</button>
            </form>
        </div>
    )
}