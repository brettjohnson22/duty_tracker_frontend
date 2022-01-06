import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Home from './Home/Home'
import NavBar from './NavBar/NavBar';
import Login from './Login/Login';
import LogOut from './LogOut/LogOut'
import Register from './Register/Register';
import { useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode';
import { useAuth }  from '../hooks/useAuth'

function App() {
  const [user_object, setUserObject] = useState(null)
  const [authed, setAuthed] = useState(false)
 

  // useEffect(() => {
  //   grabUser();
  // }, [authed])

  // const grabUser = () => {
  //   const jwt = localStorage.getItem('token')
  //   try {
  //     const decoded_token = jwtDecode(jwt);
  //     setUser(decoded_token);
  //     console.log('user set')
  //   }
  //   catch {
  //     console.log("No user")
  //   }
  // }
  
  // const checkAuth = (auth) => {
  //   console.log('hi')
  //   setAuthed(auth);
  //   console.log('authed in checkAuth', authed)
  // }

  useEffect(() =>{
    const fetchUserInfo = async () => {
      const jwt = localStorage.getItem('token')
      const response = await axios.get('http://127.0.0.1:8000/ships/get_user/', {
        headers: {
        'Authorization': `Bearer ${jwt}`
        }
      })
      setUserObject(response.data)
    }
    fetchUserInfo();
  }, [authed])


  return (

    <Router>
      {console.log('authed in app', authed)}
      <NavBar user={user_object} authed={authed}/>
      <Routes>
        <Route path="/" user={user_object} element={<Home />} />
        <Route path="/login" element={<Login setAuthed={setAuthed}/>} />
        <Route path="/register" element={<Register />} />
        <Route path= "/logout" element={<LogOut />} />
      </Routes>
    </Router>
  );
}

export default App;
