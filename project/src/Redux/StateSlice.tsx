import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface StateData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface StateSliceState {
  data: StateData[];
  loading: boolean;
  error: string | null;
}

const initialState: StateSliceState = {
  data: [],
  loading: false,
  error: null,
};
const token = localStorage.getItem("token");
// console.log(token);
export const fetchStates = createAsyncThunk("state/fetchStates", async () => {
  const response = await axios.get<StateData[]>(
    "https://apistg.appnovahome.com/Master/State/Get",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);
  return response.data;
});

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchStates.fulfilled,
        (state, action: PayloadAction<StateData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchStates.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch states";
      });
  },
});

export default stateSlice.reducer;
export const { actions } = stateSlice;
