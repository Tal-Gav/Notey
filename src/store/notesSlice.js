import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { logout } from "./authSlice"; // Import the logout action

const baseURL = "http://localhost:5555/notes/";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await axios.get(baseURL, axiosConfig);
  return response.data.notes;
});

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    fetchStatus: "idle",
    fetchMessage: null,
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },

    deleteNote: (state, action) => {
      console.log(action.payload);
      state.notes = state.notes.filter((note) => note._id !== action.payload);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map((note) =>
        note._id === action.payload._id ? action.payload : note
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.fetchStatus = "loading";
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.fetchStatus = "succeeded";
        state.fetchMessage = "Notes loaded.";
        state.notes = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.fetchStatus = "failed";
        state.fetchMessage = action.error.message;
      })
      .addCase(logout, (state) => {
        state.notes = [];
        state.fetchStatus = "idle";
        state.fetchMessage = null;
      });
  },
});
export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
