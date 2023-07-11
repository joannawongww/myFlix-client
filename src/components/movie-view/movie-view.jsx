import PropTypes from 'prop-types';

export const MovieView = ( {movie, onBackClick }) => {
    return (
        <div>
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
                <span> {movie.Genre.Name} </span>
            </div>

            <div>
                <span>Director: </span>
                <span> {movie.Director.Name} </span>
            </div>

            <div>
                <span>Image: </span>
                <span> <img src={movie.ImagePath} /> </span>
            </div>

            <div>
                <span>Featured: </span>
                <span> {movie.Featured} </span>
            </div>

            <button onClick={onBackClick}>Back</button>
        
        </div>
);
};
