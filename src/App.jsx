import { Routes, Route } from 'react-router'
import Home from './pages/home/Home'
import Details from './pages/movies/[slug]/Details'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movies'>
        <Route path=':id' element={<Details />} />
      </Route>
    </Routes>
  )
}

export default App
