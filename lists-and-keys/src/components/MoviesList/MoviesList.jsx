import { useState } from "react"
import { moviesData } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)
    const [showMovies, setSHowMovies] = useState(true)

    const removeMovie = idToDelete => {
        const newMovies = movies.filter(elm => elm._id != idToDelete)
        setMovies(newMovies)
    }

    const addMovie = () => {
        const newMovie = { _id: '8746IKGH', title: 'Pirañaconda', director: 'Bardem', hasOscars: true, IMDBRating: 9 }
        const moviesCopy = [...movies]  // Saco una copia liviana (los array se pasan por referencia, no por valor!)
        moviesCopy.unshift(newMovie)    // Manipuilo la copia (unshift NO retorna un nuevo array, muta el original)
        setMovies(moviesCopy)           // Actualizo el estado con la copia mutada
    }

    const handleMoviesShow = () => {
        setSHowMovies(!showMovies)
    }

    return (
        <section>

            <h1>Listado de pelis</h1>

            <button onClick={handleMoviesShow}>{showMovies ? 'Ocultar' : 'Mostrar'} pelis</button>
            <button onClick={addMovie}>Meter nueva peli</button>

            {
                showMovies && movies.map(elm => {
                    return <MovieCard key={elm._id} {...elm} deleteMovie={removeMovie} />
                })
            }

        </section>
    )
}

export default MoviesList