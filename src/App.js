import React from 'react'
import Navbar from './components/Navbar'
import TodasLasFiguras from './components/TodasLasFiguras'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cubo from './components/Cubo'

const App = () => {

  return (
    <div className='background'>
      <BrowserRouter>
        <div className='div-navbar'>
          <Navbar/>
        </div>
        <h1 className='titulo'>APP</h1>
        <Routes>
          <Route path='/' element={<TodasLasFiguras/>}/>
          <Route path='/cubo' element={<Cubo/>}/>
        </Routes>        
      </BrowserRouter>
    </div>
  )
}

export default App
