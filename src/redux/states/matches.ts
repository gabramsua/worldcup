import { LocalStorageTypes } from "@/constants";
import { Match } from "@/models/models";
import { getLocalStorage, setLocalStorage } from "@/utils/localStorage.utility";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Match[] = [];

export const matchesSlice = createSlice({
    name: 'matches',
    initialState: getLocalStorage(LocalStorageTypes.MATCHES) ? JSON.parse(localStorage.getItem(LocalStorageTypes.MATCHES) as string) : initialState,
    reducers: {
        addMatch: (state, action) => {
            setLocalStorage(LocalStorageTypes.MATCHES, state)
            return action.payload;
        }
    }
})

export const { addMatch } = matchesSlice.actions;