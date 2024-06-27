import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
// console.log(token);
interface LayoutData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface LayoutSliceState {
  data: LayoutData[];
  loading: boolean;
  error: string | null;
}

const initialState: LayoutSliceState = {
  data: [],
  loading: false,
  error: null,
};

// Define async thunk for fetching data
export const fetchLayout = createAsyncThunk("Layout/fetchLayout", async () => {
  const response = await axios.get<LayoutData[]>(
    "https://apistg.appnovahome.com/Master/Layout/Get",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);

  return response.data;
});

const LayoutSlice = createSlice({
  name: "Layout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLayout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchLayout.fulfilled,
        (state, action: PayloadAction<LayoutData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchLayout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch brands";
      });
  },
});

export default LayoutSlice.reducer;
export const { actions } = LayoutSlice;
