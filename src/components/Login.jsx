import React, { useState } from 'react'
import '../CSS/login.css'
import { useNavigate } from 'react-router-dom';
import {user as loginedUser} from '../state/atoms/User';
import {token as jwtToken} from '../state/atoms/Token';
import {userEmail as loggedInEmail} from '../state/atoms/Email';


import { useRecoilState } from 'recoil';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function Login() {
const[userEmail, setUserEmail] = useRecoilState(loggedInEmail);
  const[user, setUser] = useRecoilState(loginedUser)
  const[token, setToken] = useRecoilState(jwtToken)

  const navigate = useNavigate();
  const[email, setEmail] = useState('');
  const[password, setPasssword] = useState('');

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


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


    if(response.message === "logged in"){
      
      setToken(response.token);
      setUser(response.name)
      setUserEmail(response.email)
     

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
           
<TextField sx={{ m: 1, width: '25ch' }}
onChange={(e) => setEmail(e.target.value)}
        id="outlined-normal-text-input"
        label="Email"
        type="text"
        variant="outlined"
        margin="normal"
      />
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          onChange={(e) => setPasssword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

            

            <button onClick ={handleLogin} className='loginButton'>Login</button>
        </div>
    </div>
  )
}
