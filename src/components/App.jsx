import { useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import './App.scss'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import MovieDetails from '../pages/MovieDetails'
import Cast from './Cast'
import Reviews from './Reviews'

const App = () => {
	return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/movies/:movieId">Movie Details</NavLink>
      </nav>
			<Routes>
				<Route path="*" element={<Home />}></Route>
				<Route path="/movies" element={<Movies />}></Route>
				<Route path="/movies/:movieId" element={<MovieDetails />}></Route>
			</Routes>
		</>
	)
}

export default App
