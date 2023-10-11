import { PostDTO } from '../types/dto'
import ReactPlayer from 'react-player'
import Rating from '@mui/material/Rating'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'

interface PostProps {
  post: PostDTO
}
const Post = ({ post }: PostProps) => {
  return (
    <div className={classes.container}>
      <Link to={`/content/${post.id}`} style={{ textDecoration: 'none', color: 'grey' }}>
        {' '}
        <ReactPlayer url={post.videoUrl} className={classes.player} width="300px" height="300px" />
        <div className={classes.contentBox}>
          <p>{post.videoTitle}</p>
          <p>{post.creatorName}</p>
          <p>{post.comment}</p>
          <p>{post.postedBy.username}</p>
          <Rating value={post.rating} readOnly />
        </div>
      </Link>
    </div>
  )
}

export default Post
