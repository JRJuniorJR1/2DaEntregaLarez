import React from 'react'
import '../../Css/Styles.css'
import { Link, NavLink } from 'react-router-dom'
import CartIcon from '../CartIcon/CartIcon';

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
        
        <ul>
          <CartIcon/>
        </ul>
        
    </div>
  )
}

export default Navbar