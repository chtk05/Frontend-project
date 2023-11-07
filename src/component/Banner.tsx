import { Box } from '@mui/material'
import classes from './Banner.module.css'
const Banner = () => {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#dfa878', height: 300, mb: 10 }}>
      <p className={classes.learnBox}>LearnHub</p>
      <p className={classes.learnTitle}>Hub for Educational Videos</p>
    </Box>
  )
}
export default Banner
