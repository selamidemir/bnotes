import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';


function Content() {


  return (
    <>
        <Container className='pb-5'>
            <Row>
                <Col>
                    <AddNoteForm />
                    <NotesList />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Content;