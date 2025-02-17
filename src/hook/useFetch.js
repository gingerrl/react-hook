import { useEffect, useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    errorMessage: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      errorMessage: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        errorMessage: null,
      });
      return;
    }

    setLoadingState();

    const resp = await fetch(url);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        errorMessage: resp.statusText,
      });
      return;
    }

    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      errorMessage: null,
    });

    localCache[url] = data;
    // console.log({ data });
  };
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
