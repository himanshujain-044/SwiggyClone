import { configureStore } from "@reduxjs/toolkit";
import locationSidebar from "./slice/locationSidebar";

export const store = configureStore({
  reducer: {
    locationSidebar,
  },
});
