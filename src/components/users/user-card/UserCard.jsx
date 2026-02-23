import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './user_card.scss'

export function UserCard({ user }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='https://picsum.photos/200/300?random=1' />
            <Card.Body>
                <Card.Title>User Name</Card.Title>
                <Card.Text>
                    <span className='key'>Address:</span>
                    <span className='value'>User Address</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Email:</span>
                    <span className='value'>User Email</span>
                </Card.Text>
                <Card.Text>
                    <span className='key'>Phone:</span>
                    <span className='value'>User Phone</span>
                </Card.Text>
                <div className='btn-holder'>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger">Delete</Button>
                </div>
            </Card.Body>
        </Card>
    )
}
