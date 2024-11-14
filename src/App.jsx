
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import DashBoard from './Pages/DashBoard'

function App() {
  

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/dashboard' element={<DashBoard/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
