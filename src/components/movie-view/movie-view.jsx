import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./movie-view.scss";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

export const MovieView = ({ movies, user, setUser, token }) => {
  const { movieId } = useParams();
  const [Favorite, setFavorite] = useState(false);

  useEffect(() => {
    const isFavorited = user.FavoriteMovies.includes(movieId);
    setFavorite(isFavorited);
  }, []);

  const addToFavorite = () => {
    fetch(
      `https://myflix-jwww-f51e9c501b1f.herokuapp.com/users/${user.Username}/movies/${movie.Id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setFavorite(true);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      });
  };

  const removeFavorite = () => {
    fetch(
      `https://myflix-jwww-f51e9c501b1f.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setIsFavorite(false);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      });
  };

  const movie = movies.find((movie) => movie.id === movie._id);

  return (
    <div>
      <div>
        <span>
          <img src={movie.ImagePath} width="30%" />
        </span>
      </div>

      <div>
        <span>Title: </span>
        <span> {movie.Title} </span>
      </div>

      <div>
        <span>Description: </span>
        <span> {movie.Description} </span>
      </div>

      <div>
        <span>Genre: </span>
        <span> {movie.Genre} </span>
      </div>

      <div>
        <span>Director: </span>
        <span> {movie.Director} </span>
      </div>

      <div>
        <span>Featured: </span>
        <span> {movie.Featured} </span>
      </div>

      {Favorite ? (
        <Button onClick={removeFavorite}>Remove from favourite movies</Button>
      ) : (
        <Button onClick={addToFavorite}>Add to my favorite movies</Button>
      )}

      <Link to={`/`}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};
