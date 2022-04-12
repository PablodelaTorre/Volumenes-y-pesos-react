import React from 'react'
import PrismaRectangularRecto from './PrismaRectangularRecto'
import Cubo from './Cubo'
import Esfera from './Esfera'
import PrismaCircular from './PrismaCircular'

const TodasLasFiguras = () => {

    return (
        <>
            <Cubo/>
            <PrismaRectangularRecto/>
            <Esfera/>
            <PrismaCircular/>
        </>
    )    
}

export default TodasLasFiguras