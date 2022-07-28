import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [{
            id: 1,
            title: 'deneme 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'pink',
        },
        {
            id: 2,
            title: 'deneme 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightblue',
        },
        {
            id: 3,
            title: 'deneme 3',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightcyan',
        },
        {
            id: 4,
            title: 'deneme 4',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightgoldenrodyellow',
        },
        {
            id: 5,
            title: 'deneme 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightgray',
        },
        {
            id: 6,
            title: 'deneme 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightgray',
        }
        ],
        addFormVisibility: false,
    },
    reducers: {
        changeNoteBackgroundColor: (state, action) => {
            const index = state.items.findIndex(note => note.id===action.payload.id);
            state.items[index].backgroundColor = action.payload.backgroundColor;
        },
        deleteNote: (state, action) => {
            const index = state.items.findIndex(note => note.id === action.payload.noteId);
            state.items.splice(index,1);
        },
        setAddFormVisibilty: (state, action) => {
            state.addFormVisibility = !state.addFormVisibility;
        },
        addNewNote: (state, action) => {
            const note = action.payload;
            note.id = nanoid();
            state.items.push(note);
        }
    },

});

export const selectNotes = state => state.notes.items;
export const { changeNoteBackgroundColor, deleteNote, setAddFormVisibilty, addNewNote } = notesSlice.actions;
export default notesSlice.reducer;