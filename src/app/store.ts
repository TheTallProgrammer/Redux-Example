import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movies/movieSlice'

export const store = configureStore({
    // reducer is a function that specify how state of app should change in response to an action
    // will contain all parts of app that will have some sort of state you want to manage
    reducer: { 
        movies: movieReducer,
    },
});