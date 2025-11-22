import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(path) {

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState('')

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BURL}/${path}`);
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      setIsError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, isLoading, isError }
}