import axios from 'axios'
import { CreateContentDTO, PostDTO } from '../types/dto'
import { useNavigate } from 'react-router-dom'

const useCreateVideo = () => {
  const token = localStorage.getItem('token')
  //   const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const navigate = useNavigate()
  const fetchPost = async (videoUrl: string, comment: string, rating: number | null) => {
    const contentBody: CreateContentDTO = {
      videoUrl,
      comment,
      rating,
    }

    try {
      const response = await axios.post<PostDTO>('https://api.learnhub.thanayut.in.th/content', contentBody, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(response.data)
    } catch (err) {
      throw new Error('Post not success')
    } finally {
      navigate('/')
    }
  }

  return { fetchPost }
}

export default useCreateVideo
