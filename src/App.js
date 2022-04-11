import React, { useState } from 'react'
import Navbar from './components/Navbar'
import prismaRectangularRecto from './multimedia/prismaRectangularRecto.png'

const App = () => {

  const [largo, setLargo] = useState()
  const [ancho, setAncho] = useState()
  const [profundidad, setProfundidad] = useState()
  const [densidad, setDensidad] = useState()
  const [volumen, setVolumen] = useState()
  const [peso, setPeso] = useState()

  const handleChangeLargo = (e) => {
    const value = e.target.value
    setLargo(Number(value))
  }

  const handleChangeAncho = (e) => {
    const value = e.target.value
    setAncho(Number(value))
  }

  const handleChangeProfundidad = (e) => {
    const value = e.target.value
    setProfundidad(Number(value))
  }

  const handleChangeDensidad = (e) => {
    const value = e.target.value
    setDensidad(Number(value))
  }


  const volPrismaRecto = () => {
    setVolumen(largo * ancho * profundidad)
  }

  const pesoPrismaRecto = () => {
    setPeso(volumen * densidad)
  }

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
            <input onChange={handleChangeLargo} value={largo} type="text" name='largo' placeholder='Largo en cm'/>
            <input onChange={handleChangeAncho} type="text" value={ancho} name='ancho' placeholder='Ancho en cm'/>
          </div>
          <div className='center'>
            <input onChange={handleChangeProfundidad} type="text" value={profundidad} name='profundidad' placeholder='Profundidad en cm'/>
            <input onChange={handleChangeDensidad} type="text" value={densidad} name='densidad' placeholder='Densidad en gramos/cm3'/>
          </div>
          <p className='resultado-paralelogramo'>Resultados:</p>
          <div className='center'>
            <button className='calcular-prisma-rectangular-recto' onClick={volPrismaRecto}>Calcular volumen:</button>  
          </div>
          <div className='center'>
            <p className='etiqueta-resultados'>Volumen en cm3:</p>  
          </div>
          <div className='center-etiquetas'>
            <div className='resultado-volumen-paralelogramo'>{volumen? volumen : ""}</div>
          </div>
          <div className='center'>
            <button className='calcular-prisma-rectangular-recto' onClick={pesoPrismaRecto}>Calcular peso:</button>  
          </div>
          <div className='center-etiquetas'>  
            <p className='etiqueta-resultados'>Peso en gramos:</p>
          </div>
          <div className='center'>  
            <div className='resultado-peso-paralelogramo'>{peso? peso : ""}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
