import { useParams } from "react-router";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./movie-view.scss";
import Button from "react-bootstrap/Button";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const movie = movies.find((movie) => movie.id === movie._Id);

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

      <Link to={`/`}>
        <Button>Back</Button>
      </Link>
    </div>
  );
};
