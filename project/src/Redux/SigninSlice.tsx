import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface User {
  username: string;
  password: string;
  token?: string | null;
}

interface AuthState {
  dataa: User | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  dataa: null,
  error: null,
  loading: false,
};

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async (values: User, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://apistg.appnovahome.com/Account/Authenticate",
        values
      );

      return response.data.data[0];
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        authenticateUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.loading = false;
          state.dataa = action.payload;
          state.error = null;
        }
      )
      .addCase(
        authenticateUser.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});

export default authSlice.reducer;
