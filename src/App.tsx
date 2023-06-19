import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { Register } from './pages/register'
import { Home } from './pages/home'
import { ListLinks } from './components/links'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />}>
          <Route path='links' element={<ListLinks />} />
          <Route path='photos' element={<h2>Photos</h2>} />
          <Route path='save' element={<h2>save</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
