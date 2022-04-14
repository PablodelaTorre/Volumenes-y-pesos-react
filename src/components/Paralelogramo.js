import React, {useState} from 'react'
import paralelogramo from '../multimedia/paralelogramo.png'

const Paralelogramo = () => {

    const [base, setBase] = useState()
    const [altura, setAltura] = useState()
    const [area, setArea] = useState()

    const handleChangeBase = (e) => {
        const value = e.target.value
        setBase(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const areaParalelogramo = () => {
        setArea(base * altura)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Paralelogramo</p>
                <div className='center'>
                    <img className='img-paralelogramo' src={paralelogramo} alt="Paralelogramo" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeBase} value={base} type="text" name='base' placeholder='Base a en cm'/>
                    <input onChange={handleChangeAltura} value={altura} type="text" name='ladoB' placeholder='Altura en cm'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={areaParalelogramo}>Calcular Area:</button>  
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

export default Paralelogramo