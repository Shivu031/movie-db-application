import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create an async function to fetch the movie data
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movieList">
      {movies.map((movie) => (
        <MovieCard 
          key={movie.id}
          movie={movie.movie}
          rating={movie.rating}
          image={movie.image}
          imdb_url={movie.imdb_url}
        />
      ))}
    </div>
  );
};

export default MovieList;
