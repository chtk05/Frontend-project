import { PostDTO } from '../types/dto'
import ReactPlayer from 'react-player'
import Rating from '@mui/material/Rating'
import classes from './Post.module.css'

interface PostProps {
  post: PostDTO
}
const Post = ({ post }: PostProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.contentBox}>
        <ReactPlayer url={post.videoUrl} className={classes.player} width="280px" />
        <p>{post.videoTitle}</p>
        <p>{post.creatorName}</p>
        <p>{post.comment}</p>
        <p>{post.postedBy.username}</p>
        <Rating value={post.rating} readOnly />
      </div>
    </div>
  )
}

export default Post
