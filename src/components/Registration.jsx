import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { user as loginedUser } from "../state/atoms/User";
import { token as jwtToken } from "../state/atoms/Token";
import { useRecoilState } from "recoil";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {userEmail as loggedInEmail} from '../state/atoms/Email';

export default function Registration() {
  const navigate = useNavigate();
  const[userEmail, setUserEmail] = useRecoilState(loggedInEmail);

  //Input States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useRecoilState(loginedUser);
  const [token, setToken] = useRecoilState(jwtToken);

  //Handling Registration

  const handleRegistration = async (event) => {
    console.log({ name, email, password }); // Add this line to check the data being sent

    const sendData = await fetch(`http://localhost:5000/signup`, {
      method: "POST",

      headers: {
        "Content-type": "application/json",
      },

      body: JSON.stringify({ name: name, email: email, password: password }),
    });

    const response = await sendData.json();

    if (response.message === "registered") {
      const token = response.token;
      setToken(token);
      setUser(response.name);
      setUserEmail(email);
      navigate("/");
    } else if (response.message === "user exists") {
      alert("User already exist");
    } else if (response.message === "parsing error") {
      alert("Enter valid email and password");
    } else {
      alert("Internal Server error");
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="loginCard">
        <h1>Register Yourself</h1>

        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setName(e.target.value)}
          id="outlined-normal-text-input"
          label="Name"
          type="text"
          variant="outlined"
          margin="normal"
        />
        <TextField
          sx={{ m: 1, width: "25ch" }}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-normal-text-input"
          label="Email"
          type="text"
          variant="outlined"
          margin="normal"
        />
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
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

        <button onClick={() => handleRegistration()} className="loginButton">
          Register
        </button>
      </div>
    </div>
  );
}
