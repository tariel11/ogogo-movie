import React from 'react'
import { Link } from 'react-router-dom'

import s from './Navbar.module.scss'

import logo from '../../img/logo.svg'
import ava from '../../img/ava.png'
import search from '../../img/icons/search.svg'

const Navbar = () => {
  return ( 
      <div className="container">
        <nav className={s.nav}>
          <div className={s.logo}>
            <img src={logo} alt="log" />
          </div>

          <ul className={s.ul}>
            <li>
              <Link to={'/'}>Главная</Link>
            </li>
            <li>
              <Link to={'/'}>Фильмы</Link>
            </li>
            <li>
              <Link to={'/'}>Сериалы</Link>
            </li>
            <li>
              <Link to={'/'}>Мультфильмы</Link>
            </li>
          </ul>

          <div className={s.search}>
            <form>
              <input type="text" placeholder='Поиск'/>
              <img src={search} alt="search" />
            </form>

            <Link to={'/'}>
              <img src={ava} alt="avatar" />
            </Link>
          </div>
        </nav>
      </div> 
  )
}

export default Navbar