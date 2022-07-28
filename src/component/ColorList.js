import React from 'react';
import { useDispatch } from 'react-redux';
import { changeNoteBackgroundColor } from '../redux/notesSlice';

function ColorList({ noteId, setBackground }) {
    const dispacth = useDispatch();
    const handleColorChange = (e) => {
        e.preventDefault();
        const backgroundColor = e.target.getAttribute('data-color');
        if (noteId) {
            // change the background of the note with the selected color
            dispacth(changeNoteBackgroundColor({ id: noteId, backgroundColor }));
            return;
        }
        // will create new note
        setBackground(backgroundColor);
    }

    return (
        <div>
            <button className="rounded-circle color-button" data-color="pink" style={{ backgroundColor: 'pink' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="lightblue" style={{ backgroundColor: 'lightblue' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="lightcyan" style={{ backgroundColor: 'lightcyan' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="lightgoldenrodyellow" style={{ backgroundColor: 'lightgoldenrodyellow' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="lightslategray" style={{ backgroundColor: 'lightslategray' }} onClick={e => handleColorChange(e)}>
            </button>
        </div>
    );
}

export default ColorList;