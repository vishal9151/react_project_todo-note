import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./reducers/noteReducer";
import { todoReducer } from "./reducers/todoReducer";

export const store = configureStore({
  reducer: {
    todoReducer,
    noteReducer,
  },
});
