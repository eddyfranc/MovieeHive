import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import MovieForm from './Components/MovieForm';

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'The Blacklist', year: 2010, genre: 'Thriller', liked: false },
    { id: 2, title: 'Prison Break', year: 2007, genre: 'Thriller', liked: false },
    { id: 3, title: 'Money Heist', year: 2017, genre: 'Thriller', liked: false },
    { id: 4, title: 'The Night Agent', year: 2019, genre: 'Action', liked: false },
    { id: 5, title: 'The Legend of the Seeker', year: 2013, genre: 'Thriller', liked: false }
  ]);

  const [searchTerm, setSearchTerm] = useState('');


  const handleAddMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now(), liked: false }]);
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleToggleLike = (id) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, liked: !movie.liked } : movie
      )
    );
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h1 class="Movie_title">🎬 Movie Hive</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
      />

      <MovieForm onAddMovie={handleAddMovie} />

      <MovieList
        movies={filteredMovies}
        onDelete={handleDelete}
        onToggleLike={handleToggleLike}
      />
    </div>
  );
}

export default App;
