import { useState, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import SharedLayout from './SharedLayout/SharedLayout'
const Home  = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'))
const MovieDetails = lazy(() => import('../pages/MovieDetails'))
const Cast = lazy(() => import('./Cast'))
const Reviews = lazy(() => import('./Reviews'))

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="movies/:movieId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
					<Route path="*" element={<Navigate to="/"/>}></Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
