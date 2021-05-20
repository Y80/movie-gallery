import {
  SearchParams,
  DetailParams,
  SearchResponseBody,
  DetailResponseBody,
} from './types';

const BASE_URL = 'https://omdbapi.com/?apiKey=4a3b711b&';

async function fetchData<T>(
  params: Record<string, string | number>
): Promise<T> {
  const response = await fetch(
    BASE_URL + new URLSearchParams(params as Record<string, string>).toString()
  );
  return await response.json();
}

export async function search(params: SearchParams) {
  return await fetchData<SearchResponseBody>(params);
}

export async function getDetail(id: string, plot: 'full' | 'short' = 'full') {
  const params: DetailParams = {
    i: id,
    plot,
  };

  return await fetchData<DetailResponseBody>(params);
}
