import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './user_card.scss'

export function UserCard({ user }) {
    return (
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
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}
