import { Match } from "@/models/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Match[] = [];

export const resultsSlice = createSlice({
    name: 'results',
    initialState: initialState,
    reducers: {
        addResult: (state, action) => {
            return action.payload;
        }
    }
})
export const { addResult } = resultsSlice.actions;