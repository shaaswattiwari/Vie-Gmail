import { createSlice } from "@reduxjs/toolkit";

const Input = createSlice({
  name: "input",
  initialState: {
    input: "",
    isfocused: false,
  },
  reducers: {
    setinput(state, action) {
      state.input = action.payload;
    },
    setisfocused(state, action) {
      state.isfocused = action.payload;
    },
  },
});

export default Input;
export const setinput = Input.actions.setinput;
export const setisfocused = Input.actions.setisfocused;
