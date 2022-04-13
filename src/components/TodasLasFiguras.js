import React from 'react'
import PrismaRectangularRecto from './PrismaRectangularRecto'
import Cubo from './Cubo'
import Esfera from './Esfera'
import PrismaCircular from './PrismaCircular'
import PrismaTriangular from './PrismaTriangular'
import Cono from './Cono'
import Piramide from './Piramide'
import ConoTruncado from './ConoTruncado'
import Volumenes from './Volumenes'
import Areas from './Areas'

const TodasLasFiguras = () => {

    return (
        <>
            <Volumenes/>
            <Areas/>
        </>
    )    
}

export default TodasLasFiguras