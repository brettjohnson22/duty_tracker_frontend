import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import useInput from '../../hooks/useInput';
import { useAuth}  from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';


const Login = ({setAuthed}) => {

    const [username, setUserName] = useInput('');
    const [password, setPassword] = useInput('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = {
            'username': username,
            'password': password,
        }
        try{
            await login(user);
            setAuthed(true)
            navigate("/");
        }
        catch(err){
            console.log('login error', err)
        }
    }

    return(
        <Container>
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="form.Name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={setUserName} type="text"  />
                </Form.Group>
                <Form.Group controlId="form.Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={setPassword} type="password"  />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}


export default Login;