// SettingsSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
// console.log(token);
interface SettingsData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface SettingsSliceState {
  data: SettingsData[];
  loading: boolean;
  error: string | null;
}

const initialState: SettingsSliceState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchSettings = createAsyncThunk(
  "settings/fetchSettings",
  async () => {
    const response = await axios.get<SettingsData[]>(
      "https://apistg.appnovahome.com/Master/Settings/Get", // Replace with actual API endpoint
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    return response.data;
  }
);

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSettings.fulfilled,
        (state, action: PayloadAction<SettingsData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchSettings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch settings";
      });
  },
});

export default settingsSlice.reducer;
export const { actions: settingsActions } = settingsSlice;
