import React from 'react'
import { Link } from "react-router-dom"

import styles from "../../styles/Navbar.css"

const Navbar = () => {
  return (
    <nav>
      <div className='nav'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
        </ul>
      </div>



    </nav>
  )
}

export default Navbar