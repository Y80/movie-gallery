import { getDetail } from '@/lib/api';
import { MovieDetail } from '@/lib/types';
import '@/styles/detail.scss';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

interface RouteParams {
  id: string;
}

const EMPTY_VALUE = 'N/A';

export default function Detail() {
  const routeParams = useParams<RouteParams>();
  const id = routeParams.id;
  const history = useHistory();
  const [movieDetail, setMovieDetail] = useState<MovieDetail>(
    {} as MovieDetail
  );
  const [willUnMount, setWillUnMount] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    getDetail(id).then((data) => {
      if (data.Error) {
        alert(data.Error);
      } else {
        !willUnMount && setMovieDetail(data as MovieDetail);
      }
    });

    return () => {
      setWillUnMount(true);
    };
  }, [id, willUnMount]);

  return (
    <div className="detail">
      <span onClick={history.goBack}>🔙 返回</span>
      <img
        src={
          movieDetail.Poster === 'N/A'
            ? 'http://bpic.588ku.com/element_pic/01/47/03/35574339ab3c813.jpg'
            : movieDetail.Poster
        }
        alt=""
      />
      <p className="title">{movieDetail.Title}</p>

      <p>类型：{movieDetail.Type}</p>

      <p>上映日期：{movieDetail.Released}</p>
      <p>票房：{movieDetail.BoxOffice?.replace('$', '💲') || EMPTY_VALUE}</p>

      <p>时长：{movieDetail.Runtime}</p>
      <p>演员：{movieDetail.Actors}</p>
      <p>导演：{movieDetail.Director}</p>
      <p>编剧：{movieDetail.Writer}</p>
      <p>分级：{movieDetail.Rated}</p>
      <p>分类：{movieDetail.Genre}</p>

      <p>剧情：{movieDetail.Plot}</p>
      <p>语言：{movieDetail.Language}</p>
      <p>国家：{movieDetail.Country}</p>

      <p>获奖</p>
      <ul>
        {movieDetail.Awards?.split('.')
          .filter((award) => award && award !== EMPTY_VALUE)
          .map((award) => (
            <li key={award}>🏆 {award}</li>
          ))}
      </ul>

      <p>评分</p>
      <ul>
        {movieDetail.Ratings?.map((rate) => (
          <li key={rate.Source}>
            {rate.Source}: {rate.Value}
          </li>
        ))}
        {/* <li key="IMDB">IMDB: {movieDetail.Ratings}</li> */}
      </ul>
    </div>
  );
}
