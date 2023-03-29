import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { getRestaurants } from "../api/api";

const initialState = {
  data: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const fetchDataAsync = createAsyncThunk(
  "data/fetchData",
  async (fetchData) => {
    console.log("http Req", fetchData);
    //   fetchData[0]-function name passed which is making an api call,fetchData[1] data if need to pass in fnc
    const response = await fetchData[0](...fetchData[1]);
    return response;
  }
);

export const httpRequest = createSlice({
  name: "data",
  initialState,
  reducers: {
    setInitialState: (state, action) => {
      console.log("26 cleaning the store data");
      state.data = null;
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
      })
      .addCase(fetchDataAsync.rejected, (state) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })
      .addDefaultCase((state) => {
        state.data = null;
        state.isLoading = false;
      });
  },
});

export const selectData = (state) => state.data.data;
export const selectIsLoading = (state) => state.data.isLoading;
export const selectIsSuccess = (state) => state.data.isSuccess;
export const selectIsError = (state) => state.data.isError;

export default httpRequest.reducer;
export const { setInitialState } = httpRequest.actions;
