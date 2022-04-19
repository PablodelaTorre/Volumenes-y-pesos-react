import React, {useState} from 'react'
import prismaRectangularRecto from '../multimedia/prismaRectangularRecto.png'

const SuperficiePrismaRectangular = () => {

    const [largo, setLargo] = useState()
    const [profundidad, setProfundidad] = useState()
    const [altura, setAltura] = useState()
    const [superficie, setSuperficie] = useState()

    const handleChangeLargo = (e) => {
        const value = e.target.value
        setLargo(Number(value))
    }

    const handleChangeProfundidad = (e) => {
        const value = e.target.value
        setProfundidad(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const SuperficiePrismaRectangular = () => {
        setSuperficie(2 * ((largo * profundidad) + (largo * altura) + (altura * profundidad)))
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Superficie Prisma Rectangular Recto</p>
                <div className='center'>
                    <img className='img-prisma-rectangular-recto' src={prismaRectangularRecto} alt="Prisma Rectangular Recto" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeLargo} value={largo} type="text" name='largo' placeholder='Largo en cm'/>
                    <input onChange={handleChangeProfundidad} value={profundidad} type="text" name='profundidadd' placeholder='Profundidad en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeAltura} value={altura} type="text" name='altura' placeholder='Altura en cm'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={SuperficiePrismaRectangular}>Calcular Superficie:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>Superficie en cm2:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{superficie? superficie : " "}</div>
                </div>
            </div>
        </div>
    )
}

export default SuperficiePrismaRectangular