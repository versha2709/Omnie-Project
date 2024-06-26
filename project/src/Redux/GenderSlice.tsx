import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
console.log(token);
interface GenderData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface GenderSliceState {
  data: GenderData[];
  loading: boolean;
  error: string | null;
}

const initialState: GenderSliceState = {
  data: [],
  loading: false,
  error: null,
};

// Define async thunk for fetching data
export const fetchGender = createAsyncThunk("gender/fetchGender", async () => {
  const response = await axios.get<GenderData[]>(
    "https://apistg.appnovahome.com/Master/Gender/Get",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
});

const GenderSlice = createSlice({
  name: "Country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGender.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchGender.fulfilled,
        (state, action: PayloadAction<GenderData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchGender.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch brands";
      });
  },
});

export default GenderSlice.reducer;
export const { actions } = GenderSlice;
