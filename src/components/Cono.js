import React, {useState} from 'react'
import cono from '../multimedia/cono.png'

const Cono = () => {

    const PI = 3.14

    const [radio, setRadio] = useState()
    const [altura, setAltura] = useState()
    const [densidad, setDensidad] = useState()
    const [volumen, setVolumen] = useState()
    const [peso, setPeso] = useState()

    const handleChangeRadio = (e) => {
        const value = e.target.value
        setRadio(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const handleChangeDensidad = (e) => {
        const value = e.target.value
        setDensidad(Number(value))
    }

    const volEsfera = () => {
        setVolumen((PI * (Math.pow(radio, 2)) * altura) / 3)
    }

    const pesoEsfera = () => {
        setPeso(volumen * densidad)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Cono</p>
                <div className='center'>
                    <img className='img-esfera' src={cono} alt="Cono" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeRadio} value={radio} type="text" name='radio' placeholder='Radio en cm'/>
                    <input onChange={handleChangeAltura} value={altura} type="text" name='altura' placeholder='Altura en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeDensidad} type="text" value={densidad} name='densidad' placeholder='Densidad en gramos/cm3'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={volEsfera}>Calcular volumen:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>Volumen en cm3:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{volumen? volumen : ""}</div>
                </div>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={pesoEsfera}>Calcular peso:</button>  
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

export default Cono