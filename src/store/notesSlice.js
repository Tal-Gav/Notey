// reducer.js

import {
  ADD_NOTE,
  DELETE_NOTE,
  UPDATE_NOTE,
  SET_FETCHED_NOTES,
} from "./actions";

// Initial state
const initialState = {
  notes: [],
};

// Reducer function
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FETCHED_NOTES:
      console.log({ ...state });
      return {
        ...state,
        notes: action.payload,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note._id !== action.payload),
      };
    case UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note._id === action.payload.id ? action.payload : note
        ),
      };
    default:
      return state;
  }
};

export default notesReducer;
