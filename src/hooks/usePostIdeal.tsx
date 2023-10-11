import { useEffect, useState } from 'react'
import { PostDTO } from '../types/dto'
import axios from 'axios'

const usePostIdeal = (id: string) => {
  const [posts, setPosts] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [videoSrc, setVideoSrc] = useState<string>('')
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get<PostDTO>(`https://api.learnhub.thanayut.in.th/content/${id}`)
        setPosts(response.data)
        setVideoSrc(response.data.videoUrl)
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [id])
  return { posts, isLoading, videoSrc }
}

export default usePostIdeal
