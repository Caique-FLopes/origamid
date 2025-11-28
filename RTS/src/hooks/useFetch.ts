import React from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useFetchState = <T>(
  url: string,
  options?: RequestInit
): FetchState<T> => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>("");

  React.useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(url, { signal, ...options });
        const json: T = await res.json();
        setData(json);
      } catch (error: unknown) {
        if (error.name !== "AbortError") {
          setError(`Fetch error: ${error}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url, options]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetchState;
