import { PostDTO } from '../types/dto'
import ReactPlayer from 'react-player'

interface PostProps {
  post: PostDTO
}
const Post = ({ post }: PostProps) => {
  return (
    <>
      <ReactPlayer url={post.videoUrl} />
      <div>
        <p>{post.videoTitle}</p>
        <p>{post.creatorName}</p>
        <p>{post.comment}</p>
        <p>{post.postedBy.username}</p>
        <p>{post.rating}</p>
      </div>
    </>
  )
}

export default Post
