import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
console.log(token);
interface BrandData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface BrandSliceState {
  data: BrandData[];
  loading: boolean;
  error: string | null;
}

const initialState: BrandSliceState = {
  data: [],
  loading: false,
  error: null,
};

// Define async thunk for fetching data
export const fetchBrands = createAsyncThunk("brand/fetchBrands", async () => {
  const response = await axios.get<BrandData[]>(
    "https://apistg.appnovahome.com/Master/Brand/Get",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
});

const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchBrands.fulfilled,
        (state, action: PayloadAction<BrandData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch brands";
      });
  },
});

export default brandSlice.reducer;
export const { actions } = brandSlice;
