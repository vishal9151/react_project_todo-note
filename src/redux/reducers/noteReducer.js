const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  notes: [
    {
      text: "Note 1",
      createdOn: new Date().toDateString(),
    },
    {
      text: "Note 2",
      createdOn: new Date().toDateString(),
    },
  ],
};

const noteSlice = createSlice({
  name: "note",
  initialState: initialState,
  reducers: {
    // this is add action
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date().toDateString(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;

// selector

export const noteSelector = (state) => state.noteReducer.notes;
