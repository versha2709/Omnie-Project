// StoreSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
console.log(token);
interface StoreData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface StoreSliceState {
  data: StoreData[];
  loading: boolean;
  error: string | null;
}

const initialState: StoreSliceState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchStores = createAsyncThunk("store/fetchStores", async () => {
  const response = await axios.get<StoreData[]>(
    "https://apistg.appnovahome.com/Store/GetStores",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStores.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchStores.fulfilled,
        (state, action: PayloadAction<StoreData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchStores.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch stores";
      });
  },
});

export default storeSlice.reducer;
export const { actions: storeActions } = storeSlice;
