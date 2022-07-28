import { createSlice, nanoid } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [{
            id: 1,
            title: 'Lorem Ipsum 1',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'Gainsboro',
        },
        {
            id: 2,
            title: 'Simpum Ipsum 2',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'Bisque',
        },
        {
            id: 3,
            title: 'Lorem Dumsum 3',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'lightcyan',
        },
        {
            id: 4,
            title: 'Lorem Simlisum 4',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'MistyRose',
        },
        {
            id: 5,
            title: 'Tomsisun Ipsum 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'Lavender',
        },
        {
            id: 6,
            title: 'Lorem Ipsum 5',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            backgroundColor: 'Bisque',
        }
        ],
        addFormVisibility: false,
        editedNote: null,
        newNoteBackground: '',
        filter: '',
    },
    reducers: {
        changeNoteBackgroundColor: (state, action) => {
            const index = state.items.findIndex(note => note.id===action.payload.id);
            state.items[index].backgroundColor = action.payload.backgroundColor;
            if(state.editedNote) state.editedNote.backgroundColor = action.payload.backgroundColor;
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
            if(state.newNoteBackground) note.backgroundColor = state.newNoteBackground;
            state.items.push(note);
            state.newNoteBackground = '';
        },
        setEditedNote: (state, action) => {
            if(action.payload === null) {
                state.editedNote = null;
                return;
            }
            const index = state.items.findIndex(note => note.id === action.payload);
            state.editedNote = state.items[index];
        },
        saveEditedNote: (state, action) => {
            const index = state.items.findIndex(note => note.id === action.payload.id);
            state.items[index] = action.payload;
            state.editedNote = null;
        },
        setFilterNotes: (state, action) =>{
            state.filter = action.payload.toLowerCase();
        },
        setEditNoteBackground: (state, action) => {
            if(state.editedNote) state.editedNote.backgroundColor = action.payload;
        },
        setNewNoteBackground: (state, action) => {
            state.newNoteBackground = action.payload;
        }
        
    },

});

export const selectNotes = state => {
    return state.notes.items.filter(note => note.title.toLowerCase().includes(state.notes.filter));
    // state.notes.items.map(note => console.log(note.title.includes("l")))
};
export const { changeNoteBackgroundColor, deleteNote, setAddFormVisibilty, addNewNote, setEditedNote, saveEditedNote, setFilterNotes, setEditNoteBackground, setNewNoteBackground } = notesSlice.actions;
export default notesSlice.reducer;