import { useState } from 'react'
import './login.scss'
import { login } from "../../../utils/http-utils/user-requests";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('');

    const onInputChange = (event) => {
        setUser(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))

        setError('');
    }

    const onFormSubmit = (event) => {
        // We don't want the form to submit and refresh the page
        event.preventDefault();

        login(user)
            .then(() => {
                navigate('/users-list');
            })
            .catch(error => {
                setError(error.message);
            });
    }


    return (
        <div className="login-form-wrapper">
            <Form onSubmit={onFormSubmit}>
                {error && (
                    <span className="text-danger fs-4 d-block text-center">
                        {error}
                    </span>
                )}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={onInputChange} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" value={user.password} onChange={onInputChange} required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
