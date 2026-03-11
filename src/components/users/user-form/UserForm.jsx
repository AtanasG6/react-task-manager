import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './user_form.scss'
//   "isActive": false,
//   "picture": "https://picsum.photos/200/300?random=2",
//   "age": 20,
//   "name": "Le Hester",
//   "email": "lehester@volax.com",
//   "phone": "+1 (850) 412-2505",
//   "address": "247 Post Court, Biddle, South Dakota, 745"

export function UserForm() {
    return (
        <div className="user-form-wrapper">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Picture</Form.Label>
                    <Form.Control type="text" placeholder="Enter picture URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Active" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}