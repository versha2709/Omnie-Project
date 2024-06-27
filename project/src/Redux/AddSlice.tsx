import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface StateData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface AddSliceState {
  data: StateData[];
  loading: boolean;
  error: string | null;
}

const initialState: AddSliceState = {
  data: [],
  loading: false,
  error: null,
};

const token = localStorage.getItem("token");

export const fetchStates = createAsyncThunk("state/fetchStates", async () => {
  const response = await axios.get<StateData[]>(
    "https://apistg.appnovahome.com/Master/State/Get",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
});

export const addState = createAsyncThunk(
  "state/addState",
  async (newState: Omit<StateData, "id">) => {
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
      })
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
