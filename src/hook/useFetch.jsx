import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((data) => setData(data.data.hits));
  }, [url]);

  return [data];
};

export default useFetch;
