import React from 'react';
import { Container, Navbar, Form, Button, Nav} from 'react-bootstrap';
import { JournalCheck } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { setAddFormVisibilty, setFilterNotes} from '../redux/notesSlice';

function Header() {
    const dispacth = useDispatch();

    const changeAddFormVisibility = (e) => {
        e.preventDefault();
        dispacth(setAddFormVisibilty());
    }

    const handleFilter = (e) => {
        e.preventDefault();
        dispacth(setFilterNotes(e.target.value));
    }

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/#" className="ms-5" style={{ color: 'white' }}><JournalCheck className='text-info' />Notes</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="m-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search Notes"
                                className="me-2 ps-4 search-background-icon"
                                aria-label="Search"
                                onChange={(e) => handleFilter(e)}
                            />
                        </Form>
                    </Nav>
                    <Button variant="outline-success" className='me-5' onClick={(e) => changeAddFormVisibility(e)}>Add Note</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;