import React from 'react'
import Navbar from './components/Navbar'
import TodasLasFiguras from './components/TodasLasFiguras'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cubo from './components/Cubo'
import PrismaCircular from './components/PrismaCircular';
import Esfera from './components/Esfera';
import PrismaRectangularRecto from './components/PrismaRectangularRecto';
import PrismaTriangular from './components/PrismaTriangular';
import Cono from './components/Cono';
import Piramide from './components/Piramide';

const App = () => {

  return (
    <div className='background'>
      <BrowserRouter>
        <div className='div-navbar'>
          <Navbar/>
        </div>
        <h1 className='titulo'>Calculadora de volumenes y pesos.</h1>
        <Routes>
          <Route path='/' element={<TodasLasFiguras/>}/>
          <Route path='/cubo' element={<Cubo/>}/>
          <Route path='/prismaRectangularRecto' element={<PrismaRectangularRecto/>}/>
          <Route path='/esfera' element={<Esfera/>}/>
          <Route path='/prismaCircular' element={<PrismaCircular/>}/>
          <Route path='/prismaTriangular' element={<PrismaTriangular/>}/>
          <Route path='/piramide' element={<Piramide/>}/>
          <Route path='/cono' element={<Cono/>}/>
        </Routes>        
      </BrowserRouter>
    </div>
  )
}

export default App
