import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import useAxiosPrivate from "../hooks/useAxiosPrivate";
// const axiosPrivate = useAxiosPrivate();

// export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
//   const response = await axiosPrivate.get("/notes");
//   return response.data.notes;
// });

const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
    fetchStatus: "idle",
    fetchMessage: null,
  },
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },

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
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchNotes.pending, (state) => {
  //       state.fetchStatus = "loading";
  //     })
  //     .addCase(fetchNotes.fulfilled, (state, action) => {
  //       state.fetchStatus = "succeeded";
  //       state.fetchMessage = "Notes loaded.";
  //       state.notes = action.payload;
  //     })
  //     .addCase(fetchNotes.rejected, (state, action) => {
  //       state.fetchStatus = "failed";
  //       state.fetchMessage = action.error.message;
  //     })
  //     .addCase(logOut, (state) => {
  //       state.notes = [];
  //       state.fetchStatus = "idle";
  //       state.fetchMessage = null;
  //     });
  // },
});
export const { setNotes, addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
