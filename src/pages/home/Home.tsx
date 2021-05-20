import { search } from '@/lib/api';
import MovieCard from '@/components/movie-card/MovieCard';
import { useEffect, useState } from 'react';
import { MovieBrief } from '@/lib/types';

export default function Home() {
  const [movies, setMovies] = useState<MovieBrief[]>([]);

  useEffect(() => {
    search({ s: 'man', page: 1 }).then((data) => {
      setMovies(data.Search);
    });
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}
