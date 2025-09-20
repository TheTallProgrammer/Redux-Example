import React, { useState } from 'react'
import styles from '../../styles/MovieInput.module.css'
import { addMovie } from './movieSlice'
import { useDispatch } from 'react-redux'

const MovieInput = () => {
  const [newMovie, setNewMovie] = useState("")

  const dispatch = useDispatch();

  const handleAddMovie = () => {
    // if there's a movie in the state (not empty)
    if (newMovie) {
      dispatch(addMovie(newMovie));
      setNewMovie("");
    }
  }

  return (
    <>
      <div className={styles.movieInputWrapper}>
        {/* every time we type in the input, it updates the newMovie state with whatever characters are put into the input box */}
        <input onChange={(e) => setNewMovie(e.target.value)} value={newMovie} />
        <div className={styles.buttonWrapper}>
          <button onClick={handleAddMovie}>Add Movie</button>
        </div>
      </div>

    </>

  )
}

export default MovieInput

