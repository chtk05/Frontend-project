import { PostDTO } from '../types/dto'
import ReactPlayer from 'react-player'
import Rating from '@mui/material/Rating'
import classes from './Post.module.css'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

interface PostProps {
  post: PostDTO
}
const Post = ({ post }: PostProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',

        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link to={`/content/${post.id}`} style={{ textDecoration: 'none', color: 'grey' }}>
        {' '}
        <ReactPlayer url={post.videoUrl} className={classes.player} width="400px" height="300px" />
        <div className={classes.contentBox}>
          <div>
            <h4>{post.videoTitle}</h4>
            <p className={classes.creator}>{post.creatorName}</p>
            <p style={{ fontStyle: 'italic' }}>{post.comment}</p>
          </div>

          <div className={classes.belowBox}>
            <p>{post.postedBy.username}</p>
            <Rating value={post.rating} readOnly className={classes.starBox} />
          </div>
        </div>
      </Link>
    </Box>
  )
}

export default Post
