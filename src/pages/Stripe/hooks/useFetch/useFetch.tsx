import {FC, useState} from 'react'

export const useFetch = () => {
  const [data, setData] = useState<any>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<any>()

  const fetchData = async (url: string) => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const json = await response.json()
      setData(json)
    } catch (error) {
      setError(error)
    }
    setLoading(false)
  }
  
  return [data, loading, error, fetchData]
}
