import { createAsyncThunk } from "@reduxjs/toolkit";

import { getMakesApi } from "../shared/api";

export const getMakes = createAsyncThunk (
    "cars/makes",
    async (_, { rejectWithValue }) => {
        try {
            const {data} = await getMakesApi();
            return data;
        }   catch (err) {
            return rejectWithValue(err.response.data.message);
        }
    }
)
