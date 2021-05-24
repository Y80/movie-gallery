import '@/styles/movie-card.scss';
import { MovieBrief } from '@/lib/types';
import { useHistory } from 'react-router';

export default function MovieCard(props: { movie: MovieBrief }) {
  const history = useHistory();

  function goDetail() {
    history.push(`/detail/${props.movie.imdbID}`);
  }

  return (
    <div className="movie-card">
      <img
        src={
          props.movie.Poster === 'N/A'
            ? 'http://bpic.588ku.com/element_pic/01/47/03/35574339ab3c813.jpg'
            : props.movie.Poster
        }
        alt={props.movie.Title}
        onClick={goDetail}
        loading="lazy"
      />
      <div>
        <h2 className="movie-card__title" onClick={goDetail}>
          {props.movie.Title}
        </h2>
        <span className="movie-card__year">上映年份：{props.movie.Year}</span>
        <span className="movie-card__type">作品类型：{props.movie.Type}</span>
      </div>
    </div>
  );
}
