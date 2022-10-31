import { configureStore } from "@reduxjs/toolkit";
import validReducer from "./Validation";

const store = configureStore({
  reducer: { valid: validReducer },
});

export default store;
