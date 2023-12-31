import { useEffect, useState } from 'react'
import axios from 'axios'
import { ContentsDTO } from '../types/dto'

const usePost = () => {
  const [posts, setPosts] = useState<ContentsDTO | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ContentsDTO>('http://localhost:8080/content')
        console.log(response.data)
        setPosts(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  return { posts }
}

export default usePost
