import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, isLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(response => {
          if (!response.ok) {
            throw Error('Could not fetch data for that resource...');
          }
      
          return response.json();
        })
        .then(data => {
          setData(data);
          isLoading(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('Fetch aborted');
          } else {
            isLoading(false);
            setError(err.message);
          }
        });

        return () => abortCont.abort();
    }, [url]);

    return { data, loading, error }
}

export default useFetch;