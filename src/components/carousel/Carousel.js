import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import s from './Carousel.module.scss'
import s1 from '../../img/movie/s1.jpeg'
import slideBtn from '../../img/icons/btn.png'

const NextArrow = (props) => {
  const { className, onClick } = props;
  console.log(className)
  return (
    <div
      className={className + ' ' + s.next} 
      onClick={onClick}
    >
      <img src={slideBtn} alt="" />
    </div>
  );
}

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
    className={className + ' ' + s.next} 
    onClick={onClick}
  >
    <img src={slideBtn} alt="" />
  </div>
  );
}

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      <div className={s.item}>
        <div className={s.img}>
          <Link to={'/'}>  <img src={s1} alt="ss" /></Link>
        </div>
        <p className={s.name}>Кто я</p>
      </div>
      <div className={s.item}>
        <div className={s.img}>
          <img src={s1} alt="ss" />
        </div>
        <p className={s.name}>Кто я</p>
      </div>
      <div className={s.item}>
        <div className={s.img}>
          <img src={s1} alt="ss" />
        </div>
        <p className={s.name}>Кто я</p>
      </div>
      <div className={s.item}>
        <div className={s.img}>
          <img src={s1} alt="ss" />
        </div>
        <p className={s.name}>Кто я</p>
      </div>
      <div className={s.item}>
        <div className={s.img}>
          <img src={s1} alt="ss" />
        </div>
        <p className={s.name}>Кто я</p>
      </div>
     
    </Slider>
  )
}

export default Carousel