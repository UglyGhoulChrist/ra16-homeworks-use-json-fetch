import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

function ComponentError() {
  const URL_ERROR = "http://localhost:7070/error";
  const [data, loading, error] = useJsonFetch(URL_ERROR);

  return (
    <h2>
      ComponentError
      <div>{error ? "Error" : "OK"}</div>
    </h2>
  );
}

export default ComponentError;
