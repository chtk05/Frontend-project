import { useEffect, useState } from 'react'
import { PostDTO, UpdateContentDTO } from '../types/dto'
import axios from 'axios'

const usePostIdeal = (id: string) => {
  const [posts, setPosts] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
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
  const token = localStorage.getItem('token')

  const editComment = async (newComment: string, newRating: number | null) => {
    const commentBody: UpdateContentDTO = {
      comment: newComment,
      rating: newRating,
    }
    setIsSubmitting(true)
    try {
      const response = await axios.patch<UpdateContentDTO>(
        `https://api.learnhub.thanayut.in.th/content/${id}`,
        commentBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
      console.log(response.data)
    } catch (err) {
      throw new Error('Cannot edit comment!')
    } finally {
      setIsSubmitting(false)
    }
  }
  // editComment(comment, rating)

  return { posts, isLoading, videoSrc, isSubmitting, editComment }
}

export default usePostIdeal
