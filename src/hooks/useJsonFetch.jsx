import { useEffect, useState } from "react";

const useJsonFetch = function (url) {
  const [data, setData] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, 3000);
  }, []);
  return [data, error, loading];
};

export default useJsonFetch;
