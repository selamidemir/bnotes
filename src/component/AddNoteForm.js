import React, {useState} from 'react';
import { Offcanvas, Form, Button, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addNewNote, setAddFormVisibilty } from '../redux/notesSlice';
import ColorList from './ColorList';



function AddNoteForm({note}) {
  if(!note) {
    note = {
      title: '',
      description: '',
      backgroundColor: 'white',
    }
  }

  const formVisibility = useSelector(state => state.notes.addFormVisibility);
  const dispacth = useDispatch();
  const [background, setBackground] = useState(note.backgroundColor);
  const [title, setTitle] = useState(note.title);
  const [description, setDescription] = useState(note.description);
  const [error, setError] = useState('');



  const changeAddFormVisibility = (e) => {
    e.preventDefault();
    dispacth(setAddFormVisibilty());
    setTitle('');
    setDescription('');
    setBackground('white');
    setError('');
  }

  const handleSubmit = ((e) => {
    e.preventDefault();
    if(!description || !title) {
      setError('Please fill the description and the title.');
      return;
    }

    const note = {
      title: title,
      description: description,
      backgroundColor: background,
    }
    dispacth(addNewNote(note));
    changeAddFormVisibility(e);
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
                <ColorList setBackground={setBackground} />

                <Button variant='primary' className='me-2 ms-5' onClick={(e) => changeAddFormVisibility(e)}>
                  Close
                </Button>

                <Button variant="primary" type="submit">
                  Add Node
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