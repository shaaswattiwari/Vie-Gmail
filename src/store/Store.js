import { configureStore } from "@reduxjs/toolkit";
import AllMails from "./Slices/AllMails";
import Input from "./Slices/Input";

const store = configureStore({
  reducer: {
    allmails: AllMails.reducer,
    input: Input.reducer,
  },
});
export default store;
