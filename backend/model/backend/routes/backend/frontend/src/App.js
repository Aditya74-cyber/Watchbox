import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const res = await axios.get('http://localhost:5000/api/movies');
    setMovies(res.data);
  };

  const toggleWatchlist = async (id, current) => {
    await axios.patch(`http://localhost:5000/api/movies/${id}/watchlist`, {
      inWatchlist: !current,
    });
    fetchMovies();
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h1>🎬 WatchBox</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {movie.title} ({movie.year}) - {movie.genre}
            <button onClick={() => toggleWatchlist(movie._id, movie.inWatchlist)}>
              {movie.inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
