import { useEffect, useState } from 'react'

const useFetchLogements = () => {
  const [logementsData, setLogementsData] = useState([])

  useEffect(() => {
    const fetchAbout = async () => {
      fetch('./assets/logements.json')
        .then((resp) => resp.json())
        .then((resp) => setLogementsData(resp))
    }
    fetchAbout()
  }, [])
  return { logementsData }
}

export default useFetchLogements
