import React ,{useState}from 'react';
import "./Register.css";
import { useNavigate } from "react-router-dom";


function Register() {
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email ==="" || password ==="" || confirmPassword ===""){
          alert("Please fill all fields")
        }else if(password !==confirmPassword){
          alert("Password and Confirm Password are not Same")
        }else{
          fetch("https://todobackend-4rl5.onrender.com/users/register", {
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
            console.log(data)
              if (data.status === "Success") {
                  navigate("/");
                }
                if(data.status === "Failed" && data.message ==="User already exists"){
                  alert("User already exists please login")
                }
                else if(data.status === "Failed") {
                 alert(`${data.message}`)
                }
          });
      }
    }
   
  return (
    <div className='register-container'>
        <div className='register-wrapper'>
            <div className='register-circle'></div>
        <form className='register-form' onSubmit={handleSubmit}>
          <h1 className='register-h1'>Register</h1>
          <input placeholder='Username' className='register-input' type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <input placeholder='Password' className='register-input' type='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <input placeholder='Confirm Password' className='register-input'type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
          <button className='register-button' type='submit'>REGISTER</button>
          <label className='register-label'onClick={()=>navigate("/")}>Member Login</label>
          </form>
        </div>
    </div>
  )
}

export default Register
