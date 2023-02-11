import React from "react";
import useJsonFetch from "../hooks/useJsonFetch";

function ComponentData() {
  const URL_DATA = "http://localhost:7070/data";
  const [data, loading, error] = useJsonFetch(URL_DATA);

  return (
    <h2>
      ComponentData
      <div>data: {JSON.stringify(data)}</div>
    </h2>
  );
}

export default ComponentData;
