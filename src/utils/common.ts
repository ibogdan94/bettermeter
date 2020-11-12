import {useLocation} from 'react-router-dom';

export const useQuery = (): {[key: string]: string} => {
  const query = {};
  const searchParams = new URLSearchParams(useLocation().search);
  // @ts-ignore Iterate the search parameters.
  for (const p of searchParams.keys()) {
    if (p && searchParams.get(p)) {
      query[p] = searchParams.get(p);
    }
  }
  return query;
};

export const capitalize = (str: string): string => {
  if (!str) {
    return '';
  }

  return `${str[0].toUpperCase()}${str.substr(1)}`;
};
