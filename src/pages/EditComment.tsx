import { useNavigate, useParams } from 'react-router-dom'
import usePostIdeal from '../hooks/usePostIdeal'
import { FormEvent, useEffect, useState } from 'react'
import Rating from '@mui/material/Rating'

const EditComment = () => {
  const { id } = useParams()
  const { posts, editComment, isSubmitting } = usePostIdeal(id || '1')
  const navigate = useNavigate()
  const [newEditComment, setNewEditComment] = useState<string>('')
  const [newEditRating, setNewEditRating] = useState<number | null>(null)

  useEffect(() => {
    if (posts) {
      setNewEditRating(posts.rating)
      setNewEditComment(posts.comment)
    }
  }, [posts])
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await editComment(newEditComment, newEditRating)
      setNewEditComment('')
      setNewEditRating(0)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Comment (280 Characters max)</label>
        <input type="text" value={newEditComment} onChange={(e) => setNewEditComment(e.target.value)} required />
        <label>Rating</label>
        <Rating
          value={newEditRating}
          onChange={(_, value) => {
            setNewEditRating(value)
          }}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submmitting' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default EditComment
