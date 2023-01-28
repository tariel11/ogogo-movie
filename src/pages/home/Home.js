import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header/Header'
import s from './Home.module.scss'

import img from '../../img/recommend/01.jpeg'
import gadgets from '../../img/download/01.png'
import phone from '../../img/download/02.png'

const Home = () => {
  return (
    <div>
      <Header/>
     <div className="container">
      <div className={s.recommended}>
          <h2>OGOGO MOVIE <span>РЕКОМЕНДУЕТ</span></h2>
          <div className={s.box}>
            <div className={s.item}>
              <div className={s.photo}>
                <Link to={'/'}><img src={img} alt="" /></Link>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.photo}>
              <Link to={'/'}><img src={img} alt="" /></Link>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.photo}>
              <Link to={'/'}><img src={img} alt="" /></Link>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.photo}>
              <Link to={'/'}><img src={img} alt="" /></Link>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.photo}>
              <Link to={'/'}><img src={img} alt="" /></Link>
              </div>
            </div>
            <div className={s.item}>
              <div className={s.photo}>
              <Link to={'/'}><img src={img} alt="" /></Link>
              </div>
            </div>
          </div>
      </div>
      <div className={s.download}>
        <div className={s.item}>
          <img src={gadgets} alt="gadgets" />
          <div className="text">
            <h2>СМОТРИТЕ ГДЕ <span>УГОДНО</span></h2>
            <p>Смотрите фильмы и сериалы на телефоне, планшете, <br /> ноутбуке и телевизоре без ограничений и БЕСПЛАТНО.</p>
          </div>
        </div>
        <div className={s.item}>
          <div className="text">
            <h2>ТАКЖЕ ВЫ МОЖЕТЕ <span>СКАЧАТЬ</span></h2>
            <p>Загружайте сериалы для просмотра офлайн Сохраняйте видео <br /> в избранном, и у вас всегда, что посмотреть..</p>
          </div>
          <Link to={'/'}><img src={phone} alt="phone" /></Link>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home