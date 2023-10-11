import { useParams } from 'react-router-dom'
import usePostIdeal from '../hooks/usePostIdeal'
import classes from './VideoDetails.module.css'
import ReactPlayer from 'react-player'
import Rating from '@mui/material/Rating'

const VideoDetails = () => {
  const { id } = useParams()
  const { posts, isLoading } = usePostIdeal(id || '1')
  if (isLoading) return <h1>Loading....</h1>
  return (
    <div className={classes.container}>
      {posts && (
        <>
          <div>
            <h1>{posts.videoTitle}</h1>
            <h3>{posts.creatorName}</h3>
          </div>
          <div>
            <ReactPlayer url={posts.videoUrl} />
          </div>
          <div className={classes.commentBox}>
            <div className={classes.commentLeft}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Filled"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="currentColor"
                className={classes.navIcon}
              >
                <path d="M19.675,2.758A11.936,11.936,0,0,0,10.474.1,12,12,0,0,0,12.018,24H19a5.006,5.006,0,0,0,5-5V11.309l0-.063A12.044,12.044,0,0,0,19.675,2.758ZM8,7h4a1,1,0,0,1,0,2H8A1,1,0,0,1,8,7Zm8,10H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Zm0-4H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z" />
              </svg>
            </div>
            <p className={classes.commentText}> {posts.comment}</p>
            <div className={classes.commentRight}>
              <Rating value={posts.rating} readOnly />
              <p>{posts.postedBy.username}</p>
              <p>{posts.createdAt}</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default VideoDetails
