import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        searchButton: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        isSearchButtonClicked: (state) => {
            state.searchButton = !state.searchButton;
        },
        addGptMovies: (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }

    }
})

export default gptSlice.reducer;

export const {isSearchButtonClicked, addGptMovies } = gptSlice.actions;