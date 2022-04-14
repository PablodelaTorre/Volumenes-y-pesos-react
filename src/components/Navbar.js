import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='navbar'>
            <p>Volumenes Densidades y Pesos</p>
            <ul className='lista-categorias'>
                <li><Link to={"/areas"}>Areas</Link></li>
                <li><Link to={"/volumenes"}>Volumenes y pesos</Link></li>
            </ul>
        </div>
    )
}

export default Navbar