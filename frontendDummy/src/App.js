
import './App.css';
import axios from "axios";
import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/NAvBar';
import Home from './components/Home';
import SignupForm from './components/Signup';
import LoginForm from './components/Login';
import Dashboard from './components/Dashboard';
function App() {
  const [name,setName] = useState("Hello");
  console.log(name);
  const test = async()=>{
    const response = await axios.get("http://localhost:8000/user")
    setTimeout(2000)
    setName(response.data)
  }
  useEffect(()=>{
    test()
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={ <SignupForm />}></Route>
          <Route path='/login' element={ <LoginForm />}></Route>

          <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
