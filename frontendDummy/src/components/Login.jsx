import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post("http://localhost:3001/login",{email:email,password:password})
    console.log(res.data)
    if (res.data.loggedIn === true){
        navigate("/dashboard")
    }
    setResponseMessage('Login up successful!');
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      <p className="error-message">{responseMessage}</p>
    </form>
  );
}

export default LoginForm;
