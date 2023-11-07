import { useEffect, useState } from 'react'
import { PostDTO, UpdateContentDTO } from '../types/dto'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const usePostIdeal = (id: string) => {
  const [posts, setPosts] = useState<PostDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [videoSrc, setVideoSrc] = useState<string>('')
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get<PostDTO>(`http://localhost:8080/content/${id}`)
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
      const response = await axios.patch<UpdateContentDTO>(`http://localhost:8080/content/${id}`, commentBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
    } catch (err) {
      throw new Error('Cannot edit comment!')
    } finally {
      setIsSubmitting(false)
    }
  }
  // editComment(comment, rating)
  const deleteContent = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/content/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    } finally {
      navigate('/')
    }
  }

  return { posts, isLoading, videoSrc, isSubmitting, editComment, deleteContent }
}

export default usePostIdeal
