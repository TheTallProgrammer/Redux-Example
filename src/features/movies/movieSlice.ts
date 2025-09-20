import { createSlice } from "@reduxjs/toolkit";

// single movie object
export interface Movie {
    id: number,
    title: string,
}

// shape of the state slice
export interface MovieState {
    movies: Movie[];
}

// state slice extends the MovieState
const initialState: MovieState = {
    movies: [
        { id: 1, title: "Interstellar" },
        { id: 2, title: "Harry Potter" },
    ],
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    // this reducer is dedicated to movieSlice and tells slice how to interact with the array in initial state when an action happens
    // state is the state.movies, action is the action from the handler
    reducers: {
        addMovie: (state, action) => {
            const newMovie: Movie = {
                id: state.movies[state.movies.length - 1].id + 1, // this state.movies is saying (state.movies).movies, state = (state.movies) in this scope
                title: action.payload
            }
            state.movies.push(newMovie);
        },
        removeMovie: (state, action) => {
            state.movies = state.movies.filter(
                (movie) => movie.id !== action.payload
            );
        }
    }
})

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer; 