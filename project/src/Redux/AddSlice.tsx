import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { StateData } from "@/Types";
import { AddSliceState } from "@/Types";

const initialState: AddSliceState = {
  data: [],
  loading: false,
  error: null,
};

const token = localStorage.getItem("token");

export const addState = createAsyncThunk(
  "state/addState",
  async (newState: StateData) => {
    const response = await axios.post<StateData>(
      "https://apistg.appnovahome.com/Master/State/Insert",
      newState,
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

const AddSlice = createSlice({
  name: "state",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(addState.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addState.fulfilled,
        (state, action: PayloadAction<StateData>) => {
          state.loading = false;
          state.data.push(action.payload);
        }
      )
      .addCase(addState.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to add state";
      });
  },
});

export default AddSlice.reducer;
export const { actions } = AddSlice;
