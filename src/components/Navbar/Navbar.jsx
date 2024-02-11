import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbarNav'>
      
      <Link to={'/'}>
        
        <img src="/assets/img/logo-redondo.png" alt="logo-inicio" className='logo-inicio'/>

      </Link>

        <ul>
          <li>
            <NavLink to={'/'}>Inicio</NavLink>
          </li>

          <li>
            <NavLink to={'Categoria/Camisas'}>Camisas</NavLink>
          </li>

          <li>
            <NavLink to={'Categoria/Monitores'}>Monitores</NavLink>
          </li>

          <li>
            <NavLink to={'Categoria/Mousepad'}>Mousepad</NavLink>
          </li>
        </ul>

        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
        </svg>

    </div>
  )
}

export default Navbar