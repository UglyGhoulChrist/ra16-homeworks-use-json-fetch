import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

function ComponentLoading() {
  const URL_LOADING = "http://localhost:7070/loading";
  const [data, error, loading] = useJsonFetch(URL_LOADING);

  return (
    <h2>
      ComponentLoading
      <div>loading: {loading ? "loading..." : "download"}</div>
    </h2>
  );
}

export default ComponentLoading;
