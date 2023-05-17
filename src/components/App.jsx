import { useState, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
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
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/movies/:movieId" element={<MovieDetails />}>
						<Route path="cast" element={<Cast />} />
						<Route path="reviews" element={<Reviews />} />
					</Route>
				</Route>
			</Routes>
		</>
	)
}

export default App
