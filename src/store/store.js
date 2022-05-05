import {configureStore} from "@reduxjs/toolkit";
import shoesSlice from "../features/shoes/shoesSlice";

export const store = configureStore({
  reducer: {
    arrShoes: shoesSlice,
  },
});
