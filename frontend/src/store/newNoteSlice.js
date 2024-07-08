import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "", content: "" };

export const newNoteSlice = createSlice({
  name: "newNote",
  initialState,
  reducers: {
    setNewNoteTitle: (state, action) => {
      state.title = action.payload;
    },
    setNewNoteContent: (state, action) => {
      state.content = action.payload;
    },
    clearNoteFields: (state, action) => {
      state.title = "";
      state.content = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewNoteTitle, setNewNoteContent, clearNoteFields } =
  newNoteSlice.actions;

export default newNoteSlice.reducer;
