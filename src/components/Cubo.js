import React, {useState} from 'react'
import cubo from '../multimedia/cubo.png'

const PrismaRectangularRecto = () => {

    const [lado, setLado] = useState()
    const [densidad, setDensidad] = useState()
    const [volumen, setVolumen] = useState()
    const [peso, setPeso] = useState()

    const handleChangeLado = (e) => {
        const value = e.target.value
        setLado(Number(value))
    }

    const handleChangeDensidad = (e) => {
        const value = e.target.value
        setDensidad(Number(value))
    }

    const volCubo = () => {
        setVolumen(lado * lado * lado)
    }

    const pesoCubo = () => {
        setPeso(volumen * densidad)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Cubo</p>
                <div className='center'>
                    <img className='img-cubo' src={cubo} alt="Prisma Rectangular Recto" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeLado} value={lado} type="text" name='lado' placeholder='Lado en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeDensidad} type="text" value={densidad} name='densidad' placeholder='Densidad en gramos/cm3'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={volCubo}>Calcular volumen:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>Volumen en cm3:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{volumen? volumen : ""}</div>
                </div>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={pesoCubo}>Calcular peso:</button>  
                </div>
                <div className='center-etiquetas'>  
                    <p className='etiqueta-resultados'>Peso en gramos:</p>
                </div>
                <div className='center'>  
                    <div className='resultado-peso-paralelogramo'>{peso? peso : ""}</div>
                </div>
            </div>
        </div>
    )
}

export default PrismaRectangularRecto
