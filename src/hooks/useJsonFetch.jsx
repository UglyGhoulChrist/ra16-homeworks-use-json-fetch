import { useEffect, useState } from "react";

const useJsonFetch = function (url) {
  const [data, setData] = useState("");
  const [error, setError] = useState("false");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();
      xhr.onload = function () {
        // Проверка что код сервера 2xx
        if (~~(xhr.status / 100) === 2) {
          // Проверка на JSON
          try {
            const data = JSON.parse(xhr.responseText);
            setData(data);
          } catch (e) {
            setError(error);
          }
        } else {
          setError(error);
        }
        setLoading(false);
      };
      xhr.onerror = function () {
        setError(error);
      };
    }, 2000);
  }, []);
  return [data, error, loading];
};

export default useJsonFetch;
