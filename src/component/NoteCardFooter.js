import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, setAddFormVisibilty, setEditedNote } from '../redux/notesSlice';
import { Pencil, Trash3 } from 'react-bootstrap-icons';
import ColorList from './ColorList';

function NoteCardFooter({ noteId }) {
    const dispacth = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispacth(deleteNote({ noteId }));
    }

    const handleEdit = (e) => {
        e.preventDefault();
        dispacth(setEditedNote(noteId));
        dispacth(setAddFormVisibilty());        
    }

    return (
        <div className='d-flex justify-content-between align-items-center bottom-0 end-0'>
            <ColorList noteId={noteId} />
            <div>
                <a href="/#" onClick={(e) => handleEdit(e)} className="me-1" title="Edit Note"><Pencil /></a>
                <a href='/#' onClick={(e) => handleDelete(e)} style={{ color: 'red' }} title="Delete Note"><Trash3 /></a>
            </div>
        </div>
    );
}

export default NoteCardFooter;