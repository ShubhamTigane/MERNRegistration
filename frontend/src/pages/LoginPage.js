import React, { useState } from "react";
import axios from 'axios'
const LoginPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClick= async (e)=>{
    e.preventDefault()
    try {
        await axios.post('http://localhost:4000/api/user/login',{
            email,password
        },{withCredentials:true})
        alert('logged in')
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleClick} >
        <div>
          <label>email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
