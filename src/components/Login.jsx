import React, { useState } from 'react'
import '../CSS/login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPasssword] = useState('');




  //Handling login

  const handleLogin = async() =>{

    const sendData = await fetch(`http://localhost:5000/login`,{
      method : "POST",

      headers :{
        "Content-type" : "application/json"
      },

      body : JSON.stringify({email : email, password : password})

    })

    const response = await sendData.json();
    const token = response.token;
    localStorage.setItem('token', token);

    if(response.message === "logged in"){
      navigate('/');

    }

    else{
      alert("You are not registered or enter vadid details");
    }

  }
  return (
    <div className='login'>
        <div className='loginCard'>
            <h1 >Login</h1>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'>
        
            </input>

            <input onChange={(e) => setPasssword(e.target.value)} type='password' placeholder='Password'>

            </input>

            <button onClick ={handleLogin} className='loginButton'>Login</button>
        </div>
    </div>
  )
}
