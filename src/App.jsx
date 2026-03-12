import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Register } from './components/auth/register/Register'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/*' element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
