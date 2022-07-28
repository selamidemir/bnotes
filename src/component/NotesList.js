import React from 'react';
import '../App.css';
import { Col, Container, Row } from 'react-bootstrap';
import NoteCard from './NoteCard';
import { useSelector } from 'react-redux';
import { selectNotes } from '../redux/notesSlice';

function NotesList() {
  const notes = useSelector(selectNotes);
  return (
    <Container className='my-2'>
      <Row>
        <Col><ul>
          {
            notes.map((note, key) => <li key={key} className='d-inline-flex'><NoteCard note={note}/></li>)
          }
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default NotesList;