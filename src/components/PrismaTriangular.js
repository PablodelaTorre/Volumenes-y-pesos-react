import React, {useState} from 'react'
import prismaTriangular from '../multimedia/prismaTriangular.png'

const PrismaTriangular = () => {

    const [largo, setLargo] = useState()
    const [base, setBase] = useState()
    const [altura, setAltura] = useState()
    const [densidad, setDensidad] = useState()
    const [volumen, setVolumen] = useState()
    const [peso, setPeso] = useState()

    const handleChangeLargo = (e) => {
        const value = e.target.value
        setLargo(Number(value))
    }

    const handleChangeBase = (e) => {
        const value = e.target.value
        setBase(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const handleChangeDensidad = (e) => {
        const value = e.target.value
        setDensidad(Number(value))
    }

    const volPrismaTriangular = () => {
        setVolumen(((altura * base)/2) * largo)
    }

    const pesoPrismaTriangular = () => {
        setPeso(volumen * densidad)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Prisma Triangular</p>
                <div className='center'>
                    <img className='img-prisma-triangular' src={prismaTriangular} alt="Prisma Triangular" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeLargo} value={largo} type="text" name='largo' placeholder='Largo en cm'/>
                    <input onChange={handleChangeBase} type="text" value={base} name='base' placeholder='Base en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeAltura} type="text" value={altura} name='altura' placeholder='Altura en cm'/>
                    <input onChange={handleChangeDensidad} type="text" value={densidad} name='densidad' placeholder='Densidad en gramos/cm3'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={volPrismaTriangular}>Calcular volumen:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>Volumen en cm3:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{volumen? volumen : ""}</div>
                </div>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={pesoPrismaTriangular}>Calcular peso:</button>  
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

export default PrismaTriangular