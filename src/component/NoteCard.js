import React from 'react';
import { Card } from 'react-bootstrap';
import NoteCardFooter from './NoteCardFooter';

function NoteCard({note}) {
  return (
    <Card style={{ width: '23rem', height: '13rem', maxHeight: '13rem', backgroundColor: note.backgroundColor, overflow: 'hidden' }} className="d-inline-block m-1 shadow">
    <Card.Body>
      <Card.Title>{note.title}</Card.Title>
      <Card.Text style={{overflow: 'auto', height: '6rem', maxHeight: '6rem'}}>
        {note.description}
      </Card.Text>

      <NoteCardFooter noteId={note.id}/>

    </Card.Body>
  </Card>
  )
}

export default NoteCard;