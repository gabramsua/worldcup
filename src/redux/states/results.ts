import { LocalStorageTypes } from "@/constants";
import { Match } from "@/models/models";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Match[] = [];



export const resultsSlice = createSlice({
    name: 'results',
    initialState: getLocalStorage(LocalStorageTypes.RESULTS) ? JSON.parse(localStorage.getItem(LocalStorageTypes.RESULTS) as string) : initialState,
    reducers: {
        addResult: (state, action) => {
            setLocalStorage(LocalStorageTypes.RESULTS, state)
            return action.payload;
        }
    }
})
export const { addResult } = resultsSlice.actions;