import { configureStore } from "@reduxjs/toolkit";
import isCreateNoteModeReducer from "./isCreateNoteModeSlice";
import newNoteReducer from "./newNoteSlice";

export const store = configureStore({
  reducer: {
    isCreateNoteMode: isCreateNoteModeReducer,
    newNote: newNoteReducer,
  },
});
