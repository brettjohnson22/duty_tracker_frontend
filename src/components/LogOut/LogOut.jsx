import { useEffect } from "react"
import { useAuth } from '../../hooks/useAuth'


const LogOut = () => {
    const {auth, logout} = useAuth();

    useEffect(() => {
        logout();
    }, [])

    return(
        <h1>Logged Out</h1>
    )
}

export default LogOut;