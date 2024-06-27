import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const token = localStorage.getItem("token");
interface CountryData {
  id: number;
  Name: string;
  Description: string;
  Country: string;
  Status: string;
}

interface CountrySliceState {
  data: CountryData[];
  loading: boolean;
  error: string | null;
}

const initialState: CountrySliceState = {
  data: [],
  loading: false,
  error: null,
};

export const fetchCountry = createAsyncThunk(
  "country/fetchCountry",
  async () => {
    const response = await axios.get<CountryData[]>(
      "https://apistg.appnovahome.com/Master/Country/Get",
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

const CountrySlice = createSlice({
  name: "Country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCountry.fulfilled,
        (state, action: PayloadAction<CountryData[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchCountry.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch brands";
      });
  },
});

export default CountrySlice.reducer;
export const { actions } = CountrySlice;
