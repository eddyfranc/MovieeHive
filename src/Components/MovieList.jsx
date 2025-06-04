import React from 'react';
import Movie from './Movie';

function MovieList({ movies, onDelete, onToggleLike }) {
  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => (
          <Movie
            key={movie.id}
            movie={movie}
            onDelete={onDelete}
            onToggleLike={onToggleLike}
          />
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;
