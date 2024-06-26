import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
console.log(token);
interface LeadStatusData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface LeadStatusSliceState {
  data: LeadStatusData[];
  loading: boolean;
  error: string | null;
}

const initialState: LeadStatusSliceState = {
  data: [],
  loading: false,
  error: null,
};

// Define async thunk for fetching data
export const fetchLeadStatus = createAsyncThunk(
  "leadStatus/fetchLeadStatus",
  async () => {
    const response = await axios.get<LeadStatusData[]>(
      "https://apistg.appnovahome.com/Master/LeadStatus/Get",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  }
);

const LeadStatusSlice = createSlice({
  name: "LeadStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeadStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchLeadStatus.fulfilled,
        (state, action: PayloadAction<LeadStatusData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchLeadStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch brands";
      });
  },
});

export default LeadStatusSlice.reducer;
export const { actions } = LeadStatusSlice;
