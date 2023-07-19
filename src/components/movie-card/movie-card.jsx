import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";

export const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.ImagePath} alt={movie.Title} />
      <Card.Body>
        <Card.Title> {movie.Title} </Card.Title>
        <Card.Text> {movie.Director} </Card.Text>
        <Button
          onClick={() => {
            onMovieClick(movie);
          }}
          className="back-button"
        >
          Open
        </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};
