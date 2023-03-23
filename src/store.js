import { configureStore } from "@reduxjs/toolkit";
import locationSidebar from "./slice/locationSidebar";
import restaurants from "./slice/restaurants";

export const store = configureStore({
  reducer: {
    locationSidebar,
    restaurants,
  },
});
