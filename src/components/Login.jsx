import React from 'react'
import '../CSS/login.css'

export default function Login() {
  return (
    <div className='login'>
        <div className='loginCard'>
            <h1 >Login</h1>
            <input type='email' placeholder='Email'>
            
            </input>

            <input type='password' placeholder='Password'>

            </input>

            <button className='loginButton'>Login</button>
        </div>
    </div>
  )
}
