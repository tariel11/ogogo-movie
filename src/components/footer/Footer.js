import React from 'react'
import { Link } from 'react-router-dom'

import s from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={s.footer}>
          <h4>Есть вопросы? Свяжитесь с нами.</h4>
          <div className={s.box}>
           <ul>
            <li>
              <Link to={'/'}>Распространенные вопросы</Link>
            </li>
            <li>
              <Link to={'/'}>Конфидециальность</Link>
            </li>
            <li>
              <Link to={'/'}>Для интересов</Link>
            </li>
            <li>
              <Link to={'/'}>Проверка скорости</Link>
            </li>
           </ul>
           <ul>
            <li>
              <Link to={'/'}>Центр поддержки</Link>
            </li>
            <li>
              <Link to={'/'}>Вакансии</Link>
            </li>
            <li>
              <Link to={'/'}>Настройки файлов cookie</Link>
            </li>
            <li>
              <Link to={'/'}>Юридическое уведомление</Link>
            </li>
           </ul>
           <ul>
            <li>
              <Link to={'/'}>Аккаунт</Link>
            </li>
            <li>
              <Link to={'/'}>Способы просмотра</Link>
            </li>
            <li>
              <Link to={'/'}>Корпаративная информация</Link>
            </li>
            <li>
              <Link to={'/'}>Только на OGOGO Films</Link>
            </li>
           </ul>
           <ul>
            <li>
              <Link to={'/'}>Медиацентр</Link>
            </li>
            <li>
              <Link to={'/'}>Правила использоавния</Link>
            </li>
            <li>
              <Link to={'/'}>Свяжитесь с нами</Link>
            </li> 
           </ul>
          </div>
          <div className={s.coopyright}>
            <select name="lang">
              <option value="РУССКИЙ">РУССКИЙ</option>
              <option value="АНГЛИЙСКИЙ">АНГЛИЙСКИЙ</option>
            </select>
            <p>OGOGO MOVIE.com</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer