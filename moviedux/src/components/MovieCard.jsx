
export default function MovieCard({ movie, isWatchListed, toggleWatchList}){

  const handleError = (e) => {
    e.target.src = 'images/default.jpg';
  };

  const getRating = (rating) => {
    if(rating >= 8){
      return 'rating-good';
    } else if(rating >= 5 && rating < 8){
      return 'rating-ok';
    } else{
      return 'rating-bad';
    }
  };

  return <div key={movie.id} className="movie-card">
      <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">
          {movie.title}
        </h3>

        <div>
          <span className="movie-card-genre">
            {movie.genre}
          </span>
          <span className={`movie-card-rating ${getRating(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>

        <label className="switch">
          <input type="checkbox" checked={isWatchListed} onChange={() => toggleWatchList(movie.id)} />

          <span className="slider">
            <span className="slider-label">
              {isWatchListed ? 'In Watchlist' : 'Add to Watchlist'}
            </span>
          </span>
        </label>
      </div>
    </div>
}