import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLocationbarOpen: false,
  location: { lat: 18.5204303, lng: 73.8567437 },
};

export const locationSidebar = createSlice({
  name: "locationSidebar",
  initialState,
  reducers: {
    toggleOpenClose: (state) => {
      state.isLocationbarOpen = !state.isLocationbarOpen;
    },
    setLocation: (state, actions) => {
      state.location = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = locationSidebar.actions

export default locationSidebar.reducer;
export const { toggleOpenClose, setLocation } = locationSidebar.actions;
