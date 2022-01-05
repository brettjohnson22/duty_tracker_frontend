import { useEffect } from "react"


const LogOut = () => {


    useEffect(() => {
        localStorage.clear();
    }, [])

    return(
        <h1>Logged Out</h1>
    )
}

export default LogOut;