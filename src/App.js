import React from 'react'
import Navbar from './components/Navbar'
import prismaRectangularRecto from './multimedia/prismaRectangularRecto.png'

const App = () => {
  return (
    <>
      <Navbar/>
      <h1 className='titulo'>App</h1>
      <div className='contenedor'>
        <div className='tarjetas'>
          <p>Prisma rectangular recto</p>
          <div className='center'>
            <img className='img-figuras' src={prismaRectangularRecto} alt="Prisma Rectangular Recto" />
          </div>
          <div className='center'>
            <input type="text" name='largo' placeholder='Largo en cm'/>
            <input type="text" name='ancho' placeholder='Ancho en cm'/>
          </div>
          <div className='center'>
            <input type="text" name='espesor' placeholder='Espesor en cm'/>
            <input type="text" name='densidad' placeholder='Densidad en gramos/cm3'/>
          </div>
          <p className='resultado-paralelogramo'>Resultados:</p>
          <div className='center'>
            <p className='etiqueta-resultados'>Volumen:</p>  
          </div>
          <div className='center-etiquetas'>
            <div className='resultado-volumen-paralelogramo'></div>
          </div>
          <div className='center-etiquetas'>  
            <p className='etiqueta-resultados'>Peso:</p>
          </div>
          <div className='center'>  
            <div className='resultado-peso-paralelogramo'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
