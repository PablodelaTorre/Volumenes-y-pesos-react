import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false)

    const abirCerrarDropdown = () => {
        setDropdown(!dropdown)
    }

    return (
        <div className='navbar'>
            <p>Volumenes Densidades y Pesos</p>
            <Dropdown className='mx-2 mb-2' align="end" isOpen={dropdown} toggle={abirCerrarDropdown}>
            <DropdownToggle>
                Filtrar Figuras
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem className='contenedor-links'><Link className='links-figuras' to="/">Todas las figuras</Link></DropdownItem>
                <DropdownItem className='contenedor-links'><Link className='links-figuras' to="/cubo">Cubo</Link></DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </div>
    )
}

export default Navbar