import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const isCreateNoteModeSlice = createSlice({
  name: "isCreateNoteMode",
  initialState,
  reducers: {
    setIsCreateNoteMode: (state, action) => action.payload,
  },
});

// Action creators are generated for each case reducer function
export const { setIsCreateNoteMode } = isCreateNoteModeSlice.actions;

export default isCreateNoteModeSlice.reducer;
