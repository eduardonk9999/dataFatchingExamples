import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {

  const [data, setData] = useState(null);

  useEffect(() => {
    axios(url)
      .then(response => {
        setData(response.data)
      })
  }, [])

  return { data }
}