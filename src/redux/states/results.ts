import { FinalizedMatch } from "@/models/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: FinalizedMatch[] = [];

export const resultsSlice = createSlice({
    name: 'results',
    initialState: initialState,
    reducers: {
        addResult: (state, action) => {
            state.push(action.payload)
        }
    }
})
export const { addResult } = resultsSlice.actions;