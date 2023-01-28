import React from 'react'
import { Link } from 'react-router-dom'

import s from './Header.module.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div  className={s.header}>
          <h1>OGOGO MOVIE</h1>
          <p className={s.text}>Фильмы, сериалы и мультфильмы <br /> без ограничений</p>
          <Link to={'/'} className={s.btn}>Начать смотреть</Link>
          <p className={s.link}>У вас уже есть аккаунт? <Link to={'/'}>Войти</Link></p>
        </div>
      </div>
    </header>
  )
}

export default Header