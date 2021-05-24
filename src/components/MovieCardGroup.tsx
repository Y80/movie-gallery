import { MovieBrief } from '@/lib/types';
import MovieCard from '@/components/MovieCard';
import '@/styles/movie-card-group.scss';

export default function MovieCardGroup({ movies }: { movies: MovieBrief[] }) {
  return (
    <div className="movie-card-group">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
