import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='navbar'>
            <p>Calculadora para vagos</p>
            <ul className='lista-categorias'>
                <li><Link to={"/areas"}>Areas</Link></li>
                <li><Link to={"/volumenes"}>Volumenes y pesos</Link></li>
                <li><Link to={"/superficies"}>Superficies 3d</Link></li>
            </ul>
            <ul className='lista-categorias'>
                <li><Link to={"/quienesSomos"}>Quienes somos</Link></li>
                <li><Link to={"/contacto"}>Contacto</Link></li>
                <li><Link to={"/ayudanos"}>¿Nos podes ayudar?</Link></li>
            </ul>
        </div>
    )
}

export default Navbar