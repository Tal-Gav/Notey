import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import isCreateNoteModeReducer from "./isCreateNoteModeSlice";

export const store = configureStore({
  reducer: { notes: notesReducer, isCreateNoteMode: isCreateNoteModeReducer },
});
