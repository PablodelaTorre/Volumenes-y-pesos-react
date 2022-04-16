import React, {useState} from 'react'
import poligonoRegular from '../multimedia/poligonoRegular.png'

const PoligonoRegular = () => {

    const [radio, setRadio] = useState()
    const [numLados, setNumLados] = useState()
    const [area, setArea] = useState()
    const alpha = (2 * Math.PI) / (2 * numLados)
    const cateto1 = radio * Math.sin(alpha)
    const cateto2 = radio * Math.cos(alpha)

    const handleChangeRadio = (e) => {
        const value = e.target.value
        setRadio(Number(value))
    }

    const handleChangeNumLados = (e) => {
        if(numLados < 3){
            setNumLados(3)
        } else {
            const value = e.target.value
            setNumLados(Number(value))
        }
    }        

    const areaPoligonoRegular = () => {
        setArea(numLados * (cateto1 * cateto2))
    }

    return (
        <div className='contenedor'>
            <div className='tarjetas'>
                <p>Poligono Regular</p>
                <div className='center'>
                    <img className='img-poligonoRegular' src={poligonoRegular} alt="Poligono Regular" />
                </div>
                <div className='center'>
                    <input onChange={handleChangeRadio} value={radio} type="text" name='radio' placeholder='Radio en cm'/>
                    <input onChange={handleChangeNumLados} value={numLados} type="text" name='numLados' placeholder='Número de lados en cm'/>
                </div>
                <p className='resultado-paralelogramo'>Resultados:</p>
                <div className='center'>
                    <button className='calcular-prisma-rectangular-recto' onClick={areaPoligonoRegular}>Calcular Area:</button>  
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

export default PoligonoRegular