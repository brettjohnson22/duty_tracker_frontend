import { useEffect } from 'react'
import {Nav, NavDropdown, Container, Navbar} from 'react-bootstrap'
import { useAuth }  from '../../hooks/useAuth'

function NavBar({user}){
    const {authed} = useAuth()

    return(
        <Navbar bg="light">
            <Nav>
            {!user && (
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register Account</Nav.Link>
                    <Nav.Link href="/logout">Log Out</Nav.Link>
                </>
            )}
            {user && (
                <>
                    <Navbar.Text>Hello, {user.username} </Navbar.Text>
                    <Nav.Link href="/logout">Log Out</Nav.Link>
                </>
            )
            }
            </Nav>            
        </Navbar>
    )
}

export default NavBar;