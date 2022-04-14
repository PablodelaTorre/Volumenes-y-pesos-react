import React, {useState} from 'react'
import cuadrado from '../multimedia/cuadrado.png'

const Cuadrado = () => {

    const [lado, setLado] = useState()
    const [area, setArea] = useState()

    const handleChangeLado = (e) => {
        const value = e.target.value
        setLado(Number(value))
    }

    const areaCuadrado = () => {
        setArea(lado * lado)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Cuadrado</p>
                <div className='center'>
                    <img className='img-cuadrado' src={cuadrado} alt="Cuadrado" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeLado} value={lado} type="text" name='lado' placeholder='Lado en cm'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={areaCuadrado}>Calcular Area:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>Area en cm2:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{area? area : ""}</div>
                </div>
            </div>
        </div>
    )
}

export default Cuadrado