import React, {useState} from 'react'
import rectangulo from '../multimedia/rectangulo.png'

const Rectangulo = () => {

    const [ladoA, setLadoA] = useState()
    const [ladoB, setLadoB] = useState()
    const [area, setArea] = useState()

    const handleChangeLadoA = (e) => {
        const value = e.target.value
        setLadoA(Number(value))
    }

    const handleChangeLadoB = (e) => {
        const value = e.target.value
        setLadoB(Number(value))
    }

    const areaRectangulo = () => {
        setArea(ladoA * ladoB)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Rectángulo</p>
                <div className='center'>
                    <img className='img-rectangulo' src={rectangulo} alt="Rectangulo" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeLadoA} value={ladoA} type="text" name='ladoA' placeholder='Lado a en cm'/>
                    <input onChange={handleChangeLadoB} value={ladoB} type="text" name='ladoB' placeholder='Lado b en cm'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={areaRectangulo}>Calcular Area:</button>  
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

export default Rectangulo