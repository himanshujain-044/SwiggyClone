import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLocationbarOpen: false };

export const locationSidebar = createSlice({
  name: "locationSidebar",
  initialState,
  reducers: {
    toggleOpenClose: (state) => {
      state.isLocationbarOpen = !state.isLocationbarOpen;
    },
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = locationSidebar.actions

export default locationSidebar.reducer;
export const { toggleOpenClose } = locationSidebar.actions;
