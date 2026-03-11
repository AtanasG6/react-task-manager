import './header.scss'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export function Header() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='nav-link' to="/users-list">Users List</Link>
                        <Link className='nav-link' to="/tasks-list">Tasks List</Link>
                        <Link className='nav-link' to="/user/create">Create User</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}