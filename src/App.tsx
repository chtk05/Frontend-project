import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import CreateConTent from './pages/CreateContent'
import VideoDetails from './pages/VideoDetails'
import EditComment from './pages/EditComment'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/content/:id" element={<VideoDetails />} />
        <Route path="/content/edit/:id" element={<EditComment />} />
        <Route path="/create" element={<CreateConTent />} />
      </Routes>
    </div>
  )
}

export default App
