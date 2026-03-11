import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}