import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Fetch = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=e4a5e4a0')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);
  return (
    <div>

      {setMovie.map((movie) => (
        <img key={movie.id} src={movie.url} alt={movie.title} width={100} />
      ))}
    </div>
  );
};

export default Fetch;