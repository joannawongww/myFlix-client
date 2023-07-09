import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Silence of the Lamb",
            description: "Young FBI",
            genre: "Thriller",
            director: "Jonathan Demme",
            image: "silenceofthelambs.png"
        },
        {
            id: 2,
            title: "Avatar: The Way of Water",
            description: "Blue-skinned humanoids seek refuse with aquatic clan of Pandora",
            genre: "animated",
            director: "James Cameron",
            image: "avatar.png"
        },
        {
            id: 3,
            title: "Dumb and Dumber",
            description: "Two dumb but well-meaning friends set out on cross-country trip to return briefcase full of money to its owner",
            genre: "Comedy",
            director: "Peter Farrelly",
            image: "dumbanddumber.png"
            }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);

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
                    key = {movie.id}
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