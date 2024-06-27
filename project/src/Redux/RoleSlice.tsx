// RoleSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
// console.log(token);
interface RoleData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface RoleSliceState {
  data: RoleData[];
  loading: boolean;
  error: string | null;
}

const initialState: RoleSliceState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchRoles = createAsyncThunk("role/fetchRoles", async () => {
  const response = await axios.get<RoleData[]>(
    "https://apistg.appnovahome.com/Master/Role/Get",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response.data);

  return response.data;
});

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchRoles.fulfilled,
        (state, action: PayloadAction<RoleData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch roles";
      });
  },
});

export default roleSlice.reducer;
export const { actions: roleActions } = roleSlice;
