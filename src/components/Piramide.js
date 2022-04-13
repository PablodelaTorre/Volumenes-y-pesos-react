import React, {useState} from 'react'
import piramide from '../multimedia/piramide.png'

const Piramide = () => {

    const [lado, setLado] = useState()
    const [altura, setAltura] = useState()
    const [densidad, setDensidad] = useState()
    const [volumen, setVolumen] = useState()
    const [peso, setPeso] = useState()

    const handleChangeLado = (e) => {
        const value = e.target.value
        setLado(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const handleChangeDensidad = (e) => {
        const value = e.target.value
        setDensidad(Number(value))
    }

    const volPrismaCircular = () => {
        setVolumen(1/3((lado * lado) * altura))
    }

    const pesoPrismaCircular = () => {
        setPeso(volumen * densidad)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Piramide (Cilindro)</p>
                <div className='center'>
                    <img className='img-piramide' src={piramide} alt="Piramide" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeLado} value={lado} type="text" name='lado' placeholder='Lado en cm'/>
                    <input onChange={handleChangeAltura} type="text" value={altura} name='altura' placeholder='Altura en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeDensidad} type="text" value={densidad} name='densidad' placeholder='Densidad en gramos/cm3'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={volPrismaCircular}>Calcular volumen:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>Volumen en cm3:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{volumen? volumen : ""}</div>
                </div>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={pesoPrismaCircular}>Calcular peso:</button>  
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

export default Piramide
