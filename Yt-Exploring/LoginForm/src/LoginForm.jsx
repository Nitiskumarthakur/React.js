import './LoginForm.css'
import { useState } from 'react'
export default function LoginForm(){

    let [data, setData] = useState({
        username:"",
        password:"",
    })

    let handleFome =(event)=>{
        setData((prev)=>({
            ...prev, [event.target.name]:event.target.value
        }))
    }
     
    let submitForm = (e)=>{
        e.preventDefault();
        console.log(data);
        setData({
            username:"",
            password:""
        })
    }

    return(
        <div className='Container'>
            <div className='card'>
                <h1>Login Form</h1>
                <form onSubmit={submitForm} >
                    <label htmlFor="username">Username</label>
                    <input 
                       type="text" 
                       name='username' 
                       id="username" 
                       required 
                       autoComplete='off'
                       value={data.username}
                       onChange={handleFome}
                       placeholder='Username'
                    />

                    <label htmlFor="password">Password</label>
                    <input 
                       type="password" 
                       name='password' 
                       id='password' 
                       required 
                       autoComplete='off'
                       value={data.password}
                       onChange={handleFome}
                       placeholder='Password'
                    />

                    <button type='submit'>Login</button>

                    <p className='paraGraph'>Don`t have an account? <a href="#">Register</a></p>

                </form>
            </div>
        </div>
    )
}