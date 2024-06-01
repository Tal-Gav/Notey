import { createSlice } from "@reduxjs/toolkit";

const initialState = { title: "", content: "" };

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    setNoteTitle: (state, action) => {
      state.title = action.payload;
    },
    setNoteContent: (state, action) => {
      state.content = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNoteTitle, setNoteContent } = noteSlice.actions;

export default noteSlice.reducer;
