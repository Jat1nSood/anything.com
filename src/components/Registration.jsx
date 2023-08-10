import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {user as loginedUser} from '../state/atoms/User';
import {token as jwtToken} from '../state/atoms/Token';
import { useRecoilState } from 'recoil';

export default function Registration() {

  const navigate = useNavigate();

  //Input States
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const[user, setUser] = useRecoilState(loginedUser)
  const[token, setToken] = useRecoilState(jwtToken)
  

  //Handling Registration

  const handleRegistration = async(event) =>{
    
    console.log({ name, email, password }); // Add this line to check the data being sent


    const sendData = await  fetch(`http://localhost:5000/signup`,{

    method : "POST",

    headers : {
      "Content-type" : "application/json"
    },

    body : JSON.stringify({ name : name, email : email, password : password})

    })


    const response = await sendData.json();


    if(response.message === "registered"){
      const token = response.token;
      setToken(token)
      setUser(response.name)
      navigate('/');

    }
    else if(response.message === "user exists"){
      alert("User already exist");

    }

    else if(response.message === "parsing error"){
      alert("Enter valid email and password")
    }

    else{
      alert("Internal Server error")
    }

  }


  return (
    <div className='login'>
        <div className='loginCard'>
            <h1 >Register Yourself</h1>

            <input onChange={(e) => setName(e.target.value)} type='text' placeholder='Full Name'/>
            
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email'/>

            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password'/>
            <button onClick={() => handleRegistration()} className='loginButton'>Register</button>
        </div>
    </div>
  )
}
