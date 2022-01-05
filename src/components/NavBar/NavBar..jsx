import {Nav, NavDropdown, Container, Navbar} from 'react-bootstrap'

function NavBar({user}){
    return(
        <Navbar>
            <Nav>
            {!user && (
                <>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register Account</Nav.Link>
                </>
            )}
            {user && (
                <h1>Logged in</h1>
            )
            }
            </Nav>            
        </Navbar>
    )
}

export default NavBar;