import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import useInput from '../../hooks/useInput';


const Login = () => {

    const [username, setUserName] = useInput('');
    const [password, setPassword] = useInput('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = {
            'username': username,
            'password': password,
        }
        let res = await axios.post('http://127.0.0.1:8000/api/auth/login/', user)
        localStorage.setItem("token", res.data.access);
        window.location = "/";
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