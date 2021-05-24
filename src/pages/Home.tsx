import { search } from '@/lib/api';
import MovieCardGroup from '@/components/MovieCardGroup';
import { useEffect, useState } from 'react';
import { MovieBrief } from '@/lib/types';

export default function Home() {
  const [movies, setMovies] = useState<MovieBrief[]>([]);

  useEffect(() => {
    search({ s: 'man', page: 1 }).then((data) => {
      if (data.Search) {
        setMovies(data.Search);
      }
    });
  }, []);

  return <MovieCardGroup movies={movies} />;
}
