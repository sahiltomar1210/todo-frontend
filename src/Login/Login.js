import React, {  useState } from 'react'
import "./Login.css"
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [email,setUsername] =useState('')
    const [password,setPassword] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if(email ==="" || password ===""){
            alert("Please fill all fields")
        }else{
            fetch("https://todobackend-4rl5.onrender.com/users/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password
            }),
          })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === "Success") {
                    window.localStorage.setItem("token", data.token);
                    window.localStorage.setItem("username",data.user.username)
                    navigate("/Dashboard");
                  }
                  if(data.status === "Failed" && data.message ==="User Not Registered"){
                    alert("Please Sign Up First")
                  }
                  else if(data.status === "Failed") {
                   alert(`${data.message}`)
                  }
            });
        }
    }

  return (
    <div className='login-container'>
        <div className='login-wrapper'>
            <div className='login-circle'></div>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1 className='login-h1'>Member Login</h1>
          <input placeholder='Username' className='login-input' type='email' name='username' value={email} onChange={(e) => setUsername(e.target.value)}></input>
          <input placeholder='***********' type='password' name='password'className='login-input' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <button className='login-button'type='submit'>LOGIN</button>
          <label className='login-label' onClick={()=>navigate("/SignUp")}>Forgot Password?</label>
          </form>
        </div>
    </div>
  )
}

export default Login
