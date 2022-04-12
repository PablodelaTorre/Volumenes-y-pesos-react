import React from 'react'
import PrismaRectangularRecto from './PrismaRectangularRecto'
import Cubo from './Cubo'
import Esfera from './Esfera'
import PrismaCircular from './PrismaCircular'
import PrismaTriangular from './PrismaTriangular'
import Cono from './Cono'
import Piramide from './Piramide'
import ConoTruncado from './ConoTruncado'

const TodasLasFiguras = () => {

    return (
        <>
            <Cubo/>
            <PrismaRectangularRecto/>
            <Esfera/>
            <PrismaCircular/>
            <PrismaTriangular/>
            <Piramide/>
            <Cono/>
            <ConoTruncado/>
        </>
    )    
}

export default TodasLasFiguras