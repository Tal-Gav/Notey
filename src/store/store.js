import { configureStore } from "@reduxjs/toolkit";
import isCreateNoteModeReducer from "./isCreateNoteModeSlice";
import newNoteReducer from "./newNoteSlice";
import notesReducer from "./notesSlice";
export const store = configureStore({
  reducer: {
    isCreateNoteMode: isCreateNoteModeReducer,
    newNote: newNoteReducer,
    notes: notesReducer,
  },
});
