import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeMovie, type Movie } from './movieSlice'
import styles from '../../styles/MovieList.module.css'

const MovieList = () => {                   // prop-object.store-reducer.movie-reducer (to access the state of the movie slice)
    // useSelector is a way to fetch data from an existing state of a slice
    const movies = useSelector((state: any) => state.movies.movies)
    const dispatch = useDispatch();
    const handleRemoveMovie = (id: number) => {
        dispatch(removeMovie(id));
    }
    return (
        <div>
            <h1>Movie List</h1>
            <div className={styles.movieListWrapper}>
                {movies.map((movie: Movie) => (
                    <div className={styles.movieListItem} key={movie.id}>
                        {movie.title} <button onClick={() => handleRemoveMovie(movie.id)}>Delete Movie</button> </div>
                ))}
            </div>

        </div>
    )
}

export default MovieList
