import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [{
            id: 1,
            title: 'Lorem Ipsum 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'pink',
        },
        {
            id: 2,
            title: 'Lorem Ipsum 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightblue',
        },
        {
            id: 3,
            title: 'Lorem Ipsum 3',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightcyan',
        },
        {
            id: 4,
            title: 'Lorem Ipsum 4',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightgoldenrodyellow',
        },
        {
            id: 5,
            title: 'Lorem Ipsum 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightgray',
        },
        {
            id: 6,
            title: 'Lorem Ipsum 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightgray',
        }
        ],
        addFormVisibility: false,
        editedNote: null,
    },
    reducers: {
        changeNoteBackgroundColor: (state, action) => {
            const index = state.items.findIndex(note => note.id===action.payload.id);
            state.items[index].backgroundColor = action.payload.backgroundColor;
        },
        deleteNote: (state, action) => {
            const index = state.items.findIndex(note => note.id === action.payload.noteId);
            state.editedNote = state.items.splice(index,1);
        },
        setAddFormVisibilty: (state, action) => {
            state.addFormVisibility = !state.addFormVisibility;
        },
        addNewNote: (state, action) => {
            const note = action.payload;
            note.id = nanoid();
            state.items.push(note);
        },
        setEditedNote: (state, action) => {
            if(action.payload === null) {
                state.editedNote = null;
                return;
            }
            const index = state.items.findIndex(note => note.id === action.payload);
            state.editedNote = state.items[index];
            console.log(index, state.items[index])
        },
        saveEditedNote: (state, action) => {
            const index = state.items.findIndex(note => note.id === action.payload.id);
            console.log(state.items[index]);
            state.items[index] = action.payload;
        }
        
    },

});

export const selectNotes = state => state.notes.items;
export const { changeNoteBackgroundColor, deleteNote, setAddFormVisibilty, addNewNote, setEditedNote, saveEditedNote } = notesSlice.actions;
export default notesSlice.reducer;