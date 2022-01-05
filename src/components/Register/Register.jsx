import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'
import useInput from '../../hooks/useInput';


const Register = () => {

    const [username, setUserName] = useInput('');
    const [password, setPassword] = useInput('');
    const [password2, setPassword2] = useInput('');
    const [rank, setRank] = useInput('');
    const [ship, setShip] = useInput('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const user = {
            'username': username,
            'password': password,
            'rank': rank,
            'ship': ship,
        }
        let res = await axios.post('http://127.0.0.1:8000/api/auth/register/', user)
        console.log(res);
    }


    return(
        <Container>
            {console.log(username)}
            <Form onSubmit={handleSubmit} >
                <Form.Group controlId="form.Name">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control onChange={setUserName} type="text"  />
                </Form.Group>
                <Form.Group controlId="form.Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={setPassword} type="password"  />
                </Form.Group>
                <Form.Group controlId="form.Password2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onChange={setPassword2} type="password"  />
                </Form.Group>
                <Form.Group controlId="form.Rank">
                    <Form.Label>Rank</Form.Label>
                    <Form.Control onChange={setRank} type="text"  />
                </Form.Group>
                <Form.Group controlId="form.Ship">
                    <Form.Label>Ship</Form.Label>
                    <Form.Control onChange={setShip} type="number"  />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}


export default Register;