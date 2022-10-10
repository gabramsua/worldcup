import { Match } from "@/models/models";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Match[] = [];

export const matchesSlice = createSlice({
    name: 'matches',
    initialState: initialState,
    reducers: {
        addMatch: (state, action) => {
            return action.payload;
        },
        finishGame: (state, action) => { 
            const res = state.find((elem:Match) => elem.id == action.payload.id)
            if(!!res) {
                state.splice(state.indexOf(res), 1)
            }

        },
    }
})

export const { addMatch, finishGame } = matchesSlice.actions;