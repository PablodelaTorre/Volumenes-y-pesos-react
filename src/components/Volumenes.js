import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import PrismaRectangularRecto from './PrismaRectangularRecto'
import Cubo from './Cubo'
import Esfera from './Esfera'
import PrismaCircular from './PrismaCircular'
import PrismaTriangular from './PrismaTriangular'
import Cono from './Cono'
import Piramide from './Piramide'
import ConoTruncado from './ConoTruncado'
import PrismaNLados from './PrismaNLados'

const Volumenes = () => {   

    const [dropdown, setDropdown] = useState(false)

    const abirCerrarDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <>  
            <div className='center mb-5'>
                <Dropdown className='mx-2 mb-2' size='lg' isOpen={dropdown} toggle={abirCerrarDropdown}>
                    <DropdownToggle>
                        Filtrar Figuras
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem><Link className='links-figuras' to="/">Todos las figuras</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/volumenes">Todos las Volumenes</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/cubo">Cubo</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/prismaRectangularRecto">Prisma Rectangular Recto</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/esfera">Esfera</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/prismaCircular">Prisma Circular</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/prismaCircular">Prisma Circular</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/prismaTriangular">Prisma Triangular</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/piramide">Piramide</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/cono">Cono</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/conoTruncado">Cono Truncado</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/prismaNLados">Prisma de N lados</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <Cubo/>
            <PrismaRectangularRecto/>
            <Esfera/>
            <PrismaCircular/>
            <PrismaTriangular/>
            <Piramide/>
            <Cono/>
            <ConoTruncado/>
            <PrismaNLados/>
        </>
    )  
}

export default Volumenes