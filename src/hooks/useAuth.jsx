import React, {useState} from 'react'
import jwtDecode from 'jwt-decode';
import axios from 'axios';

const authContext = React.createContext();

export function useAuth(initialValue){
    const [authed, setAuthed] = useState(false);
    const [token, setToken] = useState({})
    const [creds, setCreds] = useState({})

    return {
        authed,
        login(user) {
          return new Promise((resolve, reject) => {
            axios.post('http://127.0.0.1:8000/api/auth/login/', user).then(
                response => {
                    if(response.status == 200){
                        localStorage.setItem('token', response.data.access)
                        setAuthed(true);
                        console.log('authed in useAuth', authed)
                        resolve('logged in');
                    }
                }
            ).catch(
                err => {
                setAuthed(false);
                reject(err);
                }
            )
          });
        },
        logout() {
          return new Promise((resolve) => {
            localStorage.clear('token');
            setAuthed(false);
            resolve('logged out');
          });
        }
      };
    }

export function AuthProvider({ children }) {
    const auth = useAuth();
    
    return (
        <authContext.Provider value={auth}>
        {children}
        </authContext.Provider>
    );
}
    
export default function AuthConsumer() {
    return React.useContext(authContext);
}