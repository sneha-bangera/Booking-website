import './App.css'
import Navbar from './Navbar/Navbar'
import Home from './Pages/Home'
import Footer from './Footer/Footer'
import AllHotel from './Pages/AllHotel'
import Login from './Pages/Login'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all_hotel' element={<AllHotel/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
