import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import Cuadrado from './Cuadrado'
import Rectangulo from './Rectangulo'
import Paralelogramo from './Paralelogramo'

const Areas = () => {

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
                        <DropdownItem><Link className='links-figuras' to="/areas">Todas las Areas</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/cuadrado">Cuadrado</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/rectangulo">Rectángulo</Link></DropdownItem>
                        <DropdownItem><Link className='links-figuras' to="/paralelogramo">Paralelogramo</Link></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <Cuadrado/>
            <Rectangulo/>
            <Paralelogramo/>
        </>
    )
}

export default Areas