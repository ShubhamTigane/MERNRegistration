import axios from "axios";
import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  const handleClick= async(e)=>{
    e.preventDefault()
    try {
         await axios.post('http://localhost:4000/api/user/register',{
            email,password,firstName,lastName
         },{withCredentials:true})
         alert('Registered')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <div>
          <label>email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>firstName</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>lastName</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
