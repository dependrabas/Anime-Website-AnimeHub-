import { createSlice, configureStore } from "@reduxjs/toolkit";

const animeSlice = createSlice({
    name: "Anime Slice",
    initialState: { filter: "upcoming", searchQuery: "" },
    reducers: {
        setFilter(state, action) {
            state.filter = action.payload;
        },
        setSearchQuery(state, action) {
            state.searchQuery = action.payload;
        }
    }
})

export const animeActions = animeSlice.actions;

const store = configureStore({
    reducer: {
        anime: animeSlice.reducer
    }
})

export default store;