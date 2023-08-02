import { useSearchParams } from "react-router-dom";

export function useUrl(param, defaultValue) {
  const [searchParams, setSearchParams] = useSearchParams();

  const getUrl = searchParams.get(param) || defaultValue;

  const setUrl = (value) => {
    searchParams.set(param, value);
    setSearchParams(searchParams);
  };

  return { setUrl, getUrl };
}
