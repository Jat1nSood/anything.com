import React from 'react'

export default function Registration() {
  return (
    <div className='login'>
        <div className='loginCard'>
            <h1 >Register Yourself</h1>

            <input type='text' placeholder='Full Name'/>
            
            <input type='email' placeholder='Email'/>

            <input type='password' placeholder='Password'/>
            <button className='loginButton'>Register</button>
        </div>
    </div>
  )
}
