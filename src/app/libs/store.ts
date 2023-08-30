import { configureStore } from "@reduxjs/toolkit";
import checkListReducer from "../features/reducers";

const store = configureStore({
  reducer: checkListReducer,
});

export default store;
