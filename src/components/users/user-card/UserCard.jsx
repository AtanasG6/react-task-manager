import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './user_card.scss'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export function UserCard({ user, deleteUser }) {
    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const redirectToDetails = () => {
        navigate(`/user/${user.id}`);
    }

    const redirectToEdit = () => {
        navigate(`/user/edit/${user.id}`);
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const confirmDelete = () => {
        deleteUser(user.id);
        handleClose();
    }

    if (!user) {
        return <p>No User!</p>;
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user.picture} />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>
                        <span className='key'>Address:</span>
                        <span className='value'>{user.address}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className='key'>Email:</span>
                        <span className='value'>{user.email}</span>
                    </Card.Text>
                    <Card.Text>
                        <span className='key'>Phone:</span>
                        <span className='value'>{user.phone}</span>
                    </Card.Text>
                    <div className='btn-holder'>
                        <Button variant="primary" onClick={redirectToEdit}>Edit</Button>
                        <Button variant="danger" data-toggle="modal" data-target="#exampleModal" onClick={handleShow}>Delete</Button>
                        <Button variant='info' onClick={redirectToDetails}>Details</Button>
                    </div>
                </Card.Body>
            </Card>

            {/* Modal */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to delete {user.name}?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
