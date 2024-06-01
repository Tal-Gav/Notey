import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import isCreateNoteModeReducer from "./isCreateNoteModeSlice";
import noteReducer from "./noteSlice";

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    isCreateNoteMode: isCreateNoteModeReducer,
    note: noteReducer,
  },
});
