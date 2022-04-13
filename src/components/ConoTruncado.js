import React, {useState} from 'react'
import conoTruncado from '../multimedia/conoTruncado.png'

const ConoTruncado = () => {

    const PI = 3.14

    const [radioGrande, setRadioGrande] = useState()
    const [radioChico, setRadioChico] = useState()
    const [altura, setAltura] = useState()
    const [densidad, setDensidad] = useState()
    const [volumen, setVolumen] = useState()
    const [peso, setPeso] = useState()

    const handleChangeRadioGrande = (e) => {
        const value = e.target.value
        setRadioGrande(Number(value))
    }

    const handleChangeRadioChico = (e) => {
        const value = e.target.value
        setRadioChico(Number(value))
    }

    const handleChangeAltura = (e) => {
        const value = e.target.value
        setAltura(Number(value))
    }

    const handleChangeDensidad = (e) => {
        const value = e.target.value
        setDensidad(Number(value))
    }

    const volConoTruncado = () => {
        setVolumen(1/3 * PI * altura * (Math.pow(radioGrande, 2) + Math.pow(radioChico, 2) + (radioGrande * radioChico) ))
    }

    const pesoConoTruncado = () => {
        setPeso(volumen * densidad)
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Cono Truncado</p>
                <div className='center'>
                    <img className='img-cono-truncado' src={conoTruncado} alt="Cono Truncado" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeRadioGrande} value={radioGrande} type="text" name='radioGrande' placeholder='Radio grande en cm'/>
                    <input onChange={handleChangeRadioChico} type="text" value={radioChico} name='radioChico' placeholder='Radio chico en cm'/>
                </div>
                <div className='center'>
                    <input onChange={handleChangeAltura} type="text" value={altura} name='altura' placeholder='Altura en cm'/>
                    <input onChange={handleChangeDensidad} type="text" value={densidad} name='densidad' placeholder='Densidad en gramos/cm3'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={volConoTruncado}>Calcular volumen:</button>  
                </div>
                <div className='center'>
                    <p className='etiqueta-resultados'>Volumen en cm3:</p>  
                </div>
                <div className='center-etiquetas'>
                    <div className='resultado-volumen-paralelogramo'>{volumen? volumen : ""}</div>
                </div>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={pesoConoTruncado}>Calcular peso:</button>  
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

export default ConoTruncado
