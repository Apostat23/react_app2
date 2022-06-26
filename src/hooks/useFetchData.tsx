import {useState} from 'react'
import axios from 'axios'

export const useFetchData = () => {
  const [data, setData] = useState<any>({})
  const [loading, setLoading] = useState(false)

  const fetchData = async (url: string) => {
    setLoading(true)
    const response = await axios.get(url)
    setData(response.data)
    setLoading(false)
  }

  return [data, loading, fetchData]
}
