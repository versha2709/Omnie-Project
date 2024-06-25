import { configureStore } from "@reduxjs/toolkit";
import SigninSlice from "./SigninSlice";

const store = configureStore({
  reducer : {
    sigin : SigninSlice
  }
})

export default store;