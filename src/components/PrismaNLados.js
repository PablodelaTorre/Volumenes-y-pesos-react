import React, {useState} from 'react'
import prismaPoligonal from '../multimedia/prismaPoligonal.png'

const PrismaNLados = () => {

    const [radio, setRadio] = useState()
    const [numLados, setNumLados] = useState()
    const [altura, setAltura] = useState()
    const [densidad, setDensidad] = useState()
    const [volumen, setVolumen] = useState()
    const [peso, setPeso] = useState()
    const alpha = (2 * Math.PI) / (2 * numLados)
    const cateto1 = radio * Math.sin(alpha)
    const cateto2 = radio * Math.cos(alpha)

    const handleChangeRadio = (e) => {
        const value = e.target.value
        setRadio(Number(value))
    }

    const handleChangeNumLados = (e) => {
        const value = e.target.value
        setNumLados(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const handleChangeDensidad = (e) => {
        const value = e.target.value
        setDensidad(Number(value))
    }

    const volumenPrismaNLados = () => {
        setVolumen((numLados * (cateto1 * cateto2)) * altura)
    }

    
    const pesoPrismaNLados = () => {
        setPeso(volumen * densidad)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Prisma Poligonal</p>
                <div className='center'>
                    <img className='img-poligonoRegular' src={prismaPoligonal} alt="Prisma de N lados" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeRadio} value={radio} type="text" name='radio' placeholder='Radio en cm'/>
                    <input onChange={handleChangeNumLados} value={numLados} type="text" name='numLados' placeholder='Número de lados en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeAltura} value={altura} type="text" name='altura' placeholder='Altura en cm'/>
                    <input onChange={handleChangeDensidad} type="text" value={densidad} name='densidad' placeholder='Densidad en gramos/cm3'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={volumenPrismaNLados}>Calcular volumen:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>volumen en cm3:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{volumen? volumen : ""}</div>
                </div>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={pesoPrismaNLados}>Calcular peso:</button>  
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

export default PrismaNLados