import React, {useState} from 'react'
import prismaCircular from '../multimedia/prismaCircular.png'

const SuperficiePrismaCircular = () => {

    const [radio, setRadio] = useState()
    const [altura, setAltura] = useState()
    const [superficie, setSuperficie] = useState()

    const handleChangeRadio = (e) => {
        const value = e.target.value
        setRadio(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const SuperficiePrismaCircular = () => {
        setSuperficie(2 * Math.PI * radio * (radio + altura))
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Superficie Prisma Circular (Cilindro)</p>
                <div className='center'>
                    <img className='img-prisma-circular' src={prismaCircular} alt="Prisma Circular" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeRadio} value={radio} type="text" name='radio' placeholder='Radio en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeAltura} value={altura} type="text" name='altura' placeholder='Altura en cm'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={SuperficiePrismaCircular}>Calcular Superficie:</button>  
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

export default SuperficiePrismaCircular