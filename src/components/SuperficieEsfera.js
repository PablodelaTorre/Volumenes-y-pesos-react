import React, {useState} from 'react'
import esfera from '../multimedia/esfera.png'

const SuperficieEsfera = () => {

    const PI = 3.14

    const [radio, setRadio] = useState()
    const [superficie, setSuperficie] = useState()

    const handleChangeRadio = (e) => {
        const value = e.target.value
        setRadio(Number(value))
    }

    const supEsfera = () => {
        setSuperficie(4 * PI * (Math.pow(radio, 2)))
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Superficie Esfera</p>
                <div className='center'>
                    <img className='img-esfera' src={esfera} alt="Esfera" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeRadio} value={radio} type="text" name='radio' placeholder='Radio en cm'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={supEsfera}>Calcular Superficie:</button>  
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

export default SuperficieEsfera