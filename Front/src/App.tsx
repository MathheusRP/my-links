import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './pages/login'
import { Register } from './pages/register'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
