import React, { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch("https://myflix-jwww-f51e9c501b1f.herokuapp.com/movies")
        .then((response) => response.json())
        .then((data) => {
            // console.log(data);
            
            const moviesFromApi = data.movies.map( (movie) => {
            return {
                _id: movie._id,
                title: movie.Title,
                imagePath: movie.ImagePath,
                genre: {
                    name: movie.Genre.Name,
                    description: movie.Genre.Description
                },
                director: {
                    name: movie.Director.Name,
                    bio: movie.Director.Bio,
                    birth: movie.Director.Birth
                },
                featured: movie.Featured.toString()
            };
        });
        setMovies(moviesFromApi);

    }).catch((error) => {
        console.log('Error fetching movies:', error);
    })
    }, [])

    if (selectedMovie) {
        return <MovieView movie={selectedMovie}
        onBackClick = {() => setSelectedMovie(null)} />;
    }

    if (movies.length === 0) {
        return <div> The list is empty! </div>;
    } else {
        return (
            <div>
                {movies.map((movie) => (
                    <MovieCard
                    key = {movie._id}
                    movie={movie}
                    onMovieClick = { (newSelectedMovie) => {
                        setSelectedMovie(newSelectedMovie);
                    }}
                    />
                ))}
            </div>
        );
                }
    }