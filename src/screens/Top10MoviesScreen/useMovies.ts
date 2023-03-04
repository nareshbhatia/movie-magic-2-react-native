import * as React from 'react';
import {Movie} from '../../models';

const API_URL = 'https://movie-magic-api.herokuapp.com';

/**
 * Hook to fetch movies
 */
export const useMovies = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [movies, setMovies] = React.useState<Array<Movie>>([]);

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/top-10-movies`);
        const movies = await response.json();
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);
  return {isLoading, movies};
};
