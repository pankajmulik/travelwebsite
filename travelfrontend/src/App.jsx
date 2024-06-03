import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Navbar from './pages/home/Navbar'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  

  return (
    <>
      <BrowserRouter>
        
        <Routes>

          <Route exact path='/' element={<HomePage/>} />
          <Route path='/login' element={<Login/>}>
           
          </Route>
          <Route path='/signup' element={<Signup />}/>

          

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
