import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Movie from '../pages/movie/Movie'
import { HOME_ROUTE, MOVIE_ROUTE } from '../utils/consts'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<Home />} />
      <Route path={MOVIE_ROUTE} element={<Movie />} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default AppRoutes