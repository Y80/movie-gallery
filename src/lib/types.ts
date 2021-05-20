export type SearchParams = {
  s: string;
  type?: 'movie' | 'series' | 'episode';
  page: string | number;
};

export type DetailParams = {
  i: string;
  type?: 'movie' | 'series' | 'episode';
  plot: 'short' | 'full';
};

export interface BaseResponseBody {
  Response: 'True' | 'False';
  Error?: string;
}

type MovieBriefKeys = 'Title' | 'Year' | 'imdbID' | 'Type' | 'Poster';

type MovieDetailKeys =
  | 'Title'
  | 'Year'
  | 'Rated'
  | 'Released'
  | 'Runtime'
  | 'Genre'
  | 'Director'
  | 'Writer'
  | 'Actors'
  | 'Plot'
  | 'Language'
  | 'Country'
  | 'Awards'
  | 'Poster'
  | 'Ratings'
  | 'Metascore'
  | 'imdbRating'
  | 'imdbVotes'
  | 'imdbID'
  | 'Type'
  | 'DVD'
  | 'BoxOffice'
  | 'Production'
  | 'Website';

export type MovieBrief = Record<MovieBriefKeys, string>;

export type MovieDetail = Record<MovieDetailKeys, string>;

export interface SearchResponseBody extends BaseResponseBody {
  totalResults: string;
  Search: MovieBrief[];
}

export interface DetailResponseBody extends BaseResponseBody {}
