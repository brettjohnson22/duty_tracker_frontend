import { useEffect } from 'react';
import { useAuth }  from '../../hooks/useAuth'

function Home(props){
    // const {authed} = useAuth()

    // useEffect(() =>{
    //     console.log('authed in Home', authed)
    //     props.checkAuth(authed)
    // }, [props])

    return(
        <h1>Home Page</h1>
    )
}


export default Home;