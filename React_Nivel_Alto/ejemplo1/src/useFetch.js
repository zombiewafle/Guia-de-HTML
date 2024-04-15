import { useState, useEffect, useRef } from 'react';

function useFetch(url, options = {}, autoRetryConfig = { retries: 0, interval: 1000 }) {
  const cache = useRef({});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      if (cache.current[url]) {
        setData(cache.current[url]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        cache.current[url] = data; // Save to cache
        setData(data);
        setLoading(false);
      } catch (err) {
        if (retryCount < autoRetryConfig.retries) {
          setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, autoRetryConfig.interval);
        } else {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to clear the cache
    return () => {
      cache.current = {}; // Clear cache when the component that uses the hook unmounts
    };
  }, [url, options, retryCount]);

  return { data, loading, error, retryCount };
}

export default useFetch;
