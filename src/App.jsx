import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Register/Register'
import User from './Pages/User/User'
import Home from './Pages/Home/Home'
import Users from './Pages/User/Users'
import AddUser from './Pages/User/AddUser'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'

function App() {

  return (
<>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/user' element={<User />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/addUser' element={<AddUser />}></Route>

        
      </Routes>
      <Footer />
    </>
 
  )
}

export default App
