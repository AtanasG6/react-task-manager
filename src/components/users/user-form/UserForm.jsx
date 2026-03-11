import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './user_form.scss'
import { useState } from "react";
import { createUser } from "../../../utils/http-utils/user-requests";
import { useNavigate } from "react-router-dom";
//   "isActive": false,
//   "picture": "https://picsum.photos/200/300?random=2",
//   "age": 20,
//   "name": "Le Hester",
//   "email": "lehester@volax.com",
//   "phone": "+1 (850) 412-2505",
//   "address": "247 Post Court, Biddle, South Dakota, 745"

export function UserForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        isActive: false,
        name: '',
        email: '',
        picture: '',
        phone: '',
        address: ''
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        createUser(user)
            .then(() => {
                navigate('/users-list');
            })
    }

    const onInputChange = (event) => {
        setUser(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="user-form-wrapper">
            <Form onSubmit={onFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" name="name" onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="text" placeholder="Enter picture URL" name="picture" onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" name="phone" onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" name="address" onChange={onInputChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Active" name="isActive" onChange={onInputChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}