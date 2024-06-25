import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface AuthState {
  token: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  token: null,
  error: null,
  loading: false,
};

export const authenticateUser = createAsyncThunk(
  "auth/authenticateUser",
  async (credentials: { username: string; password: string }) => {
    try {
      const response = await axios.post("https://apistg.appnovahome.com/Account/Authenticate", credentials, {
       
      });

      if (response.status !== 200) {
        throw new Error(response.data.message || "Failed to authenticate.");
      }

      const token = response.data.token; 
      console.log(token);
      return token;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authenticateUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.token = action.payload;
        state.error = null;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});


export default authSlice.reducer;
