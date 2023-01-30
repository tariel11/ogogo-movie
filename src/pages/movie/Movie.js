import React from 'react'

import s from './Movie.module.scss'
import bg from '../../img/movie/bg.jpeg'
import first from '../../img/movie/01.jpeg'
import second from '../../img/movie/02.jpeg'
import third from '../../img/movie/03.jpeg'
import Carousel from '../../components/carousel/Carousel'

const Movie = () => {
  return (
    <div className={s.wrap}>
     <div className="container">
        <div className={s.movie}>
          <div className={s.main}>
            <div className={s.photo}>
              <img src={bg} alt="bg" />
            </div>
            <div className={s.content}>
              <h1>ПАРАЗИТЫ</h1>
              <p>Обычное корейское семейство Кимов жизнь не балует. Приходится жить в сыром грязном полуподвале, воровать интернет у соседей и перебиваться случайными подработками. Однажды друг сына семейства, уезжая на стажировку за границу, предлагает тому заменить его ипоработать репетитором у старшеклассницы в богатой семье Пак. Подделав диплом о высшем образовании, парень отправляется в шикарный дизайнерский особняк и производит на хозяйку дома хорошее впечатление. Тут же ему в голову приходит необычный план по трудоустройству сестры.</p>
              <div className={s.info}>
                <div className={s.year}>2021</div>
                <div className={s.age}>18+</div>
                <div className={s.duration}>1 час 23 мин</div>
              </div>
              <div className={s.btns}>
                <a className={s.btn} target='_blank' rel="noreferrer" href="https://www.ivi.ru/watch/255354?utm_source=google&utm_medium=wizard">Начать смотреть</a>
                <a className={s.btn} target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=GGnM74uxjlo">Смотреть трейлер</a>
              </div>
            </div>
          </div>
          <div className={s.images}>
            <img src={first} alt="first" />
            <img src={second} alt="second" />
            <img src={third} alt="third" />
          </div>
        </div>
        <div className={s.similar}>
          <h2>ПОХОЖИЕ ФИЛЬМЫ</h2>
          <Carousel/>
        </div>
     </div>
    </div>
  )
}

export default Movie