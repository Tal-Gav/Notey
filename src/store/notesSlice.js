import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },

    addNote: (state, action) => {
      state.notes.push(action.payload);
    },

    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note._id !== action.payload);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    },
  },
});

export const { setNotes, addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
