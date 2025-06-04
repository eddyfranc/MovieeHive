import React from 'react';

function Movie({ movie, onDelete, onToggleLike }) {
  const { id, title, year, genre, liked } = movie;

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '8px',
      }}
    >
      <h2>{title}</h2>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <button onClick={() => onToggleLike(id)}>
        {liked ? '❤️ Liked' : '🤍 Like'}
      </button>{' '}
      <button onClick={() => onDelete(id)} style={{ marginLeft: '10px' }}>
        🗑️ Delete
      </button>
    </div>
  );
}

export default Movie;
