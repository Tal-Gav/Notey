// actions.js

// Action types
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const SET_FETCHED_NOTES = "SET_FETCHED_NOTES";

// Action creator
export const setFetchedNotes = (notes) => ({
  type: SET_FETCHED_NOTES,
  payload: notes,
});

// Action creators
export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const deleteNote = (id) => ({
  type: DELETE_NOTE,
  payload: id,
});

export const updateNote = (note) => ({
  type: UPDATE_NOTE,
  payload: note,
});
