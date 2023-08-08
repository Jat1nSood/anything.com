import React, { useState } from 'react'
import '../CSS/login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPasssword] = useState('');

  //Email Storing in state
  const handleEmail = (e) =>{

    setEmail(e.target.value);
    console.log(email)

  }

  //Password Storing in state

  const handlePassword = (e) =>{

    setPasssword(e.target.value);

  }


  //Handling login

  const handleLogin = async() =>{

    const sendData = await fetch(`http:localhost:5000/login`,{
      method : "POST",

      header :{
        "Content-type" : "application/json"
      },

      body : JSON.stringify({email : email, password : password})

    })

    const response = await sendData.json();
    const token = response.token;
    localStorage.setItem('token', token);

    navigate('/');
  }
  return (
    <div className='login'>
        <div className='loginCard'>
            <h1 >Login</h1>
            <input onChange={(e) => handleEmail(e)} type='email' placeholder='Email'>
        
            </input>

            <input onChange={(e) => handlePassword(e)} type='password' placeholder='Password'>

            </input>

            <button onClick ={handleLogin} className='loginButton'>Login</button>
        </div>
    </div>
  )
}
