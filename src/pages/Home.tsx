import Post from '../component/Post'
import usePost from '../hooks/usePost'

const Home = () => {
  const { posts } = usePost()
  return (
    <div>
      {posts &&
        posts.data.map((content) => {
          return <Post key={content.id} post={content} />
        })}
    </div>
  )
}
export default Home
