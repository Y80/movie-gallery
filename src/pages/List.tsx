import '@/styles/list.scss';
import { search } from '@/lib/api';
import MovieCardGroup from '@/components/MovieCardGroup';
import { useEffect, useState } from 'react';
import { MovieBrief } from '@/lib/types';
import { useHistory, useParams } from 'react-router-dom';
import Pagination from '@/components/Pagination';

interface routeParams {
  searchValue: string;
}

export default function List() {
  const history = useHistory();
  const searchValue = useParams<routeParams>().searchValue;
  const [movies, setMovies] = useState<MovieBrief[]>([]);
  const [responseError, setResponseError] = useState('');
  const paramsPage = new URLSearchParams(history.location.search).get('page');
  const [page, setPage] = useState(Number(paramsPage) || 1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    search({ s: searchValue, page }).then((data) => {
      if (data.Error) {
        setResponseError(data.Error);
      }
      if (data.Search) {
        setMovies(data.Search);
      }
      if (data.totalResults) {
        setTotal(Number(data.totalResults));
      }
    });
  }, [searchValue, page]);

  useEffect(() => {
    if (!history.location.search.includes(`?page=${page}`)) {
      history.replace(`${history.location.pathname}?page=${page}`);
    }
  }, [page, history]);

  return (
    <div className="list">
      <h2>🐱‍🏍【{searchValue}】的搜索结果</h2>
      {responseError ? (
        <div className="error-box">
          <p>接口错误：{responseError}</p>
          <p>换个关键词试试吧</p>
        </div>
      ) : (
        <>
          <MovieCardGroup movies={movies} />
          <Pagination setCurrent={setPage} current={page} total={total} />
        </>
      )}
    </div>
  );
}
