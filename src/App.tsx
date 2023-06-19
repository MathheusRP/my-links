import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { Register } from './pages/register'
import { Home } from './pages/home'
import { ListLinks } from './components/links'
import { ListPhotos } from './components/listPhotos'
import { OpenImage } from './components/openImage'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />}>
          <Route path='links' element={<ListLinks />} />
          <Route path='photos' element={<ListPhotos />}>
            <Route path='teste' element={<OpenImage />} />
          </Route>
          <Route path='save' element={<h1>teste</h1>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
