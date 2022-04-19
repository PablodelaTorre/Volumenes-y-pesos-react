import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import SuperficiePrismaCircular from './SuperficieCilindro'
import SuperficieEsfera from './SuperficieEsfera'
import SuperficiePrismaRectangular from './SuperficiePrismaRectangular'


const Superficies = () => {

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
                        <DropdownItem><Link className='links-figuras' to="/">Todas las figuras</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/superficies">Todas las Superficies</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/supEsfera">Superficie Esfera</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/supPrismaRectangular">Superficie Prisma Rectangular</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/supPrismaCircular">Superficie Prisma Circular</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <SuperficieEsfera/>
            <SuperficiePrismaRectangular/>
            <SuperficiePrismaCircular/>
        </>
    )
}

export default Superficies