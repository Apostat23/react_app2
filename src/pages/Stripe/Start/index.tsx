import {FC, useState, useEffect} from 'react';
import {useFetch} from '../hooks/useFetch/useFetch';

interface Props{}

const Start: FC<Props> = () => {
  const [data, loading, error, fetchData] = useFetch();
  const [url, setUrl] = useState('')

  useEffect(() => {
    fetchData('localhost:3000')
    console.log(data)
  }, [])

  return (
    <>
      <h1>Stripe</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={() => fetchData(url)}>Fetch Data</button>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
  )
}

export default Start;
