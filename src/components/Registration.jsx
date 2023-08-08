import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Registration() {

  const navigate = useNavigate();

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPasssword] = useState('');

  //Name storing in state

 const handleName = (e) =>{

    setName(e.target.value);

  }
  //Email Storing in state
  const handleEmail = (e) =>{

    setEmail(e.target.value);

  }

  //Password Storing in state

  const handlePassword = (e) =>{

    setPasssword(e.target.value);

  }


  //Handling login

  const handleRegistration = async() =>{


    const sendData = await  fetch(`http://localhost:5000/signup`,{

    method : "POST",

    header : {
      "Content-type" : "application/json"
    },

    body : JSON.stringify({ name : name, email : email, password : password})

    })


    const response = await sendData.json();

    const token = response.token;

    localStorage.setItem("token" , token)

  
    navigate('/');

  }


  return (
    <div className='login'>
        <div className='loginCard'>
            <h1 >Register Yourself</h1>

            <input onChange={handleName} type='text' placeholder='Full Name'/>
            
            <input onChange={handleEmail} type='email' placeholder='Email'/>

            <input onChange={handlePassword} type='password' placeholder='Password'/>
            <button onClick={handleRegistration} className='loginButton'>Register</button>
        </div>
    </div>
  )
}
