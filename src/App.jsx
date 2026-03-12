import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import { Register } from './components/auth/register/Register'
import { UsersList } from './components/users/users-list/UsersList'
import { User } from './components/users/user/User'
import { UserForm } from './components/users/user-form/UserForm'
import Login from './components/auth/login/Login'


function App() {
  return (
    <>
      <Routes>
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Layout />} >
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/user/create" element={<UserForm />} />
          <Route path="/user/edit/:id" element={<UserForm />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
