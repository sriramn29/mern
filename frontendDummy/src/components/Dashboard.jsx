import React from 'react';
import "../css/Dashboard.css"
import { useNavigate } from 'react-router-dom';
const Dashboard = ({ user, onLogout }) => {
  let navigate = useNavigate();
  const handleLogout = () =>{
    navigate("/")
  }
  return(
    <div className="dashboard-container">
    <h1>Welcome to the Dashboard, {user?.username}!</h1>
    <button onClick={handleLogout}>Logout</button>
  </div>
  )
}

export default Dashboard;
