import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createAsyncThunk("user/login", async (user, thunkApi) => {
  try {
    const response = await axios.post("http://localhost:5000/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
});

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});
