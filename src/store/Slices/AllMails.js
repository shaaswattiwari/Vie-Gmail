import { createSlice } from "@reduxjs/toolkit";

const AllMails = createSlice({
  name: "allmails",
  initialState: { allmails: [] },
  reducers: {
    setallmails(state, action) {
      state.allmails = action.payload;
    },
  },
});

export default AllMails;
export const setallmails = AllMails.actions.setallmails;
