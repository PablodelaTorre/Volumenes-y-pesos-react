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
import ConoTruncado from './components/ConoTruncado';
import Footer from './components/Footer';
import Areas from './components/Areas';
import Volumenes from './components/Volumenes';
import Superficies from './components/Superficies';
import Paralelogramo from './components/Paralelogramo';
import Rectangulo from './components/Rectangulo';
import Cuadrado from './components/Cuadrado';
import SuperficieEsfera from './components/SuperficieEsfera';
import PoligonoRegular from './components/PoligonoRegular';
import PrismaNLados from './components/PrismaNLados';
import SuperficiePrismaRectangular from './components/SuperficiePrismaRectangular';
import SuperficiePrismaCircular from './components/SuperficieCilindro';


const App = () => {

  return (
    <div className='background'>
      <BrowserRouter>
        <div className='div-navbar'>
          <Navbar/>
        </div>
        <Routes>
        <Route path='/' element={<TodasLasFiguras/>}/>
          <Route path='/volumenes' element={<Volumenes/>}/>
          <Route path='/cubo' element={<Cubo/>}/>
          <Route path='/prismaRectangularRecto' element={<PrismaRectangularRecto/>}/>
          <Route path='/esfera' element={<Esfera/>}/>
          <Route path='/prismaCircular' element={<PrismaCircular/>}/>
          <Route path='/prismaTriangular' element={<PrismaTriangular/>}/>
          <Route path='/piramide' element={<Piramide/>}/>
          <Route path='/cono' element={<Cono/>}/>
          <Route path='/conoTruncado' element={<ConoTruncado/>}/>
          <Route path='/prismaNLados' element={<PrismaNLados/>}/>
          <Route path='/areas' element={<Areas/>}/>
          <Route path='/cuadrado' element={<Cuadrado/>}/>
          <Route path='/rectangulo' element={<Rectangulo/>}/>
          <Route path='/paralelogramo' element={<Paralelogramo/>}/>
          <Route path='/poligonoRegular' element={<PoligonoRegular/>}/>
          <Route path='/superficies' element={<Superficies/>}/>
          <Route path='/supEsfera' element={<SuperficieEsfera/>}/>
          <Route path='/supPrismaRectangular' element={<SuperficiePrismaRectangular/>}/>
          <Route path='/supPrismaCircular' element={<SuperficiePrismaCircular/>}/>
        </Routes>        
        <div className='div-footer'>
          <Footer/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
