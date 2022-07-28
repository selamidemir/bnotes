import React, {useEffect, useState} from 'react';
import { Offcanvas, Form, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewNote, setAddFormVisibilty, setEditedNote, saveEditedNote, setNewNoteBackground } from '../redux/notesSlice';
import ColorList from './ColorList';



function AddNoteForm() {
  const editedNote = useSelector(state => state.notes.editedNote);

  var note = {
      id: editedNote ? editedNote.id : '',
      title: editedNote ? editedNote.title : '',
      description: editedNote ? editedNote.description : '',
      backgroundColor: editedNote ? editedNote.backgroundColor : 'Gainsboro',
    }

  const formVisibility = useSelector(state => state.notes.addFormVisibility);
  const dispacth = useDispatch();

  const [background, setBackground] = useState(note.backgroundColor);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    setTitle(note.title);
    setDescription(note.description);
    setBackground(note.backgroundColor);
  }, [note.title, note.description, note.backgroundColor]);

  const closeAddForm = (e) => {
    e.preventDefault();
    dispacth(setAddFormVisibilty());
    dispacth(setEditedNote(null));
    dispacth(setNewNoteBackground(''));
    setTitle('');
    setDescription('');
    // setBackground('Gainsboro');
    setError('');
  }

  const handleSubmit = ((e) => {
    e.preventDefault();
    if(!description || !title) {
      setError('Please fill the description and the title.');
      return;
    }

    note = { ...note,
      title: title,
      description: description,
      backgroundColor: editedNote ? editedNote.backgroundColor : background,
    }

    editedNote ? dispacth(saveEditedNote(note)) : dispacth(addNewNote(note));
    closeAddForm(e);
  });

  return (
    <>
      <Offcanvas show={formVisibility} placement='end'>
        <Card  className='pt-3' style={{borderWidth: 0}}>
          <Card.Title className='ps-3'>Add Note</Card.Title>
          <Card.Body>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Form.Group className="mb-3" controlId="noteTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="noteDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Note description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <div className='text-danger'>{error}</div>
              </Form.Group>

              
              <div className='d-flex justify-content-end'>
                <ColorList setBackground={setBackground} noteId={false} />

                <Button variant='primary' className='me-2 ms-5' onClick={(e) => closeAddForm(e)}>
                  Close
                </Button>

                <Button variant="primary" type="submit">
                  { note.id ? 'Save' : 'Add Node' }
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Offcanvas>
    </>
  );
}

export default AddNoteForm;