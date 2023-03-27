import { configureStore } from "@reduxjs/toolkit";
import locationSidebar from "./slice/locationSidebar";
import restaurants from "./slice/restaurants";
import httpRequest from "./slice/httpRequest";

export const store = configureStore({
  reducer: {
    locationSidebar,
    restaurants,
    httpRequest,
  },
});
