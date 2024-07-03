import { useEffect, useState } from 'react'

const useFetchAbout = () => {
  const [aboutData, setAboutData] = useState([])

  useEffect(() => {
    const fetchAbout = async () => {
      fetch('/assets/aboutData.json')
        .then((resp) => resp.json())
        .then((resp) => setAboutData(resp))
    }
    fetchAbout()
  }, [])
  return { aboutData }
}

export default useFetchAbout
