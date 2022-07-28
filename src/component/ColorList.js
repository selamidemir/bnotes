import React from 'react';
import { useDispatch } from 'react-redux';
import { changeNoteBackgroundColor, setEditNoteBackground } from '../redux/notesSlice';

function ColorList({ noteId}) {
    const dispacth = useDispatch();
    const handleColorChange = (e) => {
        e.preventDefault();
        const backgroundColor = e.target.getAttribute('data-color');
        if (noteId) {
            // change the background of the note with the selected color
            dispacth(changeNoteBackgroundColor({ id: noteId, backgroundColor }));
            return;
        }
        dispacth(setEditNoteBackground(backgroundColor));

    }

    return (
        <div>
            <button className="rounded-circle color-button" data-color="Gainsboro" style={{ backgroundColor: 'Gainsboro' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="Bisque" style={{ backgroundColor: 'Bisque' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="LightCyan" style={{ backgroundColor: 'LightCyan' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="MistyRose" style={{ backgroundColor: 'MistyRose' }} onClick={e => handleColorChange(e)}>
            </button>

            <button className="rounded-circle color-button" data-color="Lavender" style={{ backgroundColor: 'Lavender' }} onClick={e => handleColorChange(e)}>
            </button>
        </div>
    );
}

export default ColorList;