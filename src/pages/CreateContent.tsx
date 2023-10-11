import Rating from '@mui/material/Rating'
import { FormEvent, useState } from 'react'
import useCreateVideo from '../hooks/useCreateVideo'

const CreateConTent = () => {
  const [newVideo, setNewVideo] = useState<string>('')
  const [newComment, setComment] = useState<string>('')
  const [newRating, setRating] = useState<number>(0)
  const { fetchPost } = useCreateVideo()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      await fetchPost(newVideo, newComment, newRating)
      setNewVideo('')
      setComment('')
      setRating(0)
    } catch (err) {
      console.log(err)
    }
  }
  const handleChange = (_event: React.ChangeEvent<number>, newValue: number) => {
    setRating(newValue)
  }
  return (
    <>
      <h3>Create new content</h3>
      <form onSubmit={handleSubmit}>
        <label>Video URL</label>
        <input
          type="text"
          onChange={(e) => {
            setNewVideo(e.target.value)
          }}
          required
          value={newVideo}
        />
        <label>Comment</label>
        <input
          type="text"
          onChange={(e) => {
            setComment(e.target.value)
          }}
          required
          value={newComment}
        />
        <Rating value={newRating} onChange={handleChange} />
        <button type="submit">Create Content</button>
      </form>
    </>
  )
}
export default CreateConTent
