import { createSlice } from "@reduxjs/toolkit";

const initialState = { lat: 22.7199, lng: 75.857383 };

export const restaurants = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setRestaurants: (state, actions) => {
      return actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = restaurants.actions

export default restaurants.reducer;
export const { setRestaurants } = restaurants.actions;
