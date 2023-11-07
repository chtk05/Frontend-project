import Banner from '../component/Banner'
import Post from '../component/Post'
import usePost from '../hooks/usePost'
import { Box } from '@mui/material'

const Home = () => {
  const { posts } = usePost()
  return (
    <>
      <Banner />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4,

          width: '80%',
          marginLeft: '0',
          boxSizing: 'border-box',
          alignContent: 'center',
          // display: 'grid',
          // gridTemplateColumns: 'repeat(3, 1fr)',
          // gap: 4,
          // width: '80%',
          // mx: 'auto',
          // boxSizing: 'border-box',
          // alignContent: 'center',
        }}
      >
        {posts &&
          posts.data.map((content) => {
            return <Post key={content.id} post={content} />
          })}
      </Box>
    </>
  )
}
export default Home
