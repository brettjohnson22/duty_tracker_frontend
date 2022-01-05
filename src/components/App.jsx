import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home'
import NavBar from './NavBar/NavBar.';
import Login from './Login/Login';
import LogOut from './LogOut/LogOut'
import Register from './Register/Register';
import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const jwt = localStorage.getItem('token')
    try {
      const logged_in_user = jwtDecode(jwt);
      setUser(logged_in_user);
    }
    catch {
      console.log("No user")
    }}
  , [])


  return (

    <Router>
      <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path= "/logout" element={<LogOut />} />
      </Routes>
    </Router>
  );
}

export default App;
