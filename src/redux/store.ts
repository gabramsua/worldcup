import { Match } from "@/models/models";
import { configureStore } from "@reduxjs/toolkit";
import { matchesSlice, resultsSlice } from "./states";

export interface AppStore {
    matches: Match[];
    results: Match[];
}

export default configureStore<AppStore>({
    reducer: {
        matches: matchesSlice.reducer,
        results: resultsSlice.reducer,
    }
});