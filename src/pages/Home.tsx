import Post from '../component/Post'
import usePost from '../hooks/usePost'
import classes from './Home.module.css'

const Home = () => {
  const { posts } = usePost()
  return (
    <div className={classes.container}>
      <div className={classes.feed}>
        {posts &&
          posts.data.map((content) => {
            return <Post key={content.id} post={content} />
          })}
      </div>
    </div>
  )
}
export default Home
