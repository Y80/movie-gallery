import { MovieBrief } from '@/lib/types';

export default function MovieCard(props: { movie: MovieBrief }) {
  return (
    <div className="movie-card">
      <h2 className="movie-card__title">{props.movie.Title}</h2>
      <img src={props.movie.Poster} alt={props.movie.Title} />
      <span className="movie-card__year">{props.movie.Year}</span>
      <span className="movie-card__type">{props.movie.Type}</span>
    </div>
  );
}
