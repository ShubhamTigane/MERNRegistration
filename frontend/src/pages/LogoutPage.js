import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async() => {
      try {
      await  axios.post('http://localhost:4000/api/user/logout',{},{withCredentials:true})
      alert('logged out')
        navigate('/login')
      } catch (error) {
        console.log(error)
      }
    };
    logoutUser();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default LogoutPage;
