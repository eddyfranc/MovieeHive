import React, { useState } from 'react';

function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [genre, setGenre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !year || !genre) return;

    onAddMovie({ title, year: parseInt(year), genre });
    setTitle('');
    setYear('');
    setGenre('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ padding: '8px', marginRight: '10px', width: '40%' }}
      />
      <input
        type="number"
        placeholder="Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        required
        style={{ padding: '8px', marginRight: '10px', width: '20%' }}
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
        style={{ padding: '8px', marginRight: '10px', width: '25%' }}
      />
      <button type="submit" style={{ padding: '8px 12px' }}>➕ Add</button>
    </form>
  );
}

export default MovieForm;





