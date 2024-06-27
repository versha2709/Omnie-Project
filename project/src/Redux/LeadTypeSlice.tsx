import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
// console.log(token);

interface LeadTypeData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface LeadTypeSliceState {
  data: LeadTypeData[];
  loading: boolean;
  error: string | null;
}

const initialState: LeadTypeSliceState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchLeadType = createAsyncThunk(
  "leadType/fetchLeadType",
  async () => {
    const response = await axios.get<LeadTypeData[]>(
      "https://apistg.appnovahome.com/Master/State/Get",
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

const leadTypeSlice = createSlice({
  name: "leadType",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeadType.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchLeadType.fulfilled,
        (state, action: PayloadAction<LeadTypeData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchLeadType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch states";
      });
  },
});

export default leadTypeSlice.reducer;
export const { actions } = leadTypeSlice;
