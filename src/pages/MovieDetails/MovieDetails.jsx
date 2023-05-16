import { useState, useEffect } from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { getDetails } from '../../services/getDetails'
import { MovieDetailsWrapper } from './MovieDetails.styled'

const MovieDetails = () => {
	const { movieId } = useParams()
	const [movieDetails, setMovieDetails] = useState()

	useEffect(() => {
		async function fetchData() {
			const details = await getDetails(movieId)
			console.log(details)
			setMovieDetails(details)
		}
		fetchData()
	}, [])

	return (
		<MovieDetailsWrapper>
			<p>MovieDetails Component: {movieId}</p>
			<Link to="cast">Cast</Link>
			<Link to="reviews">Reviews</Link>
			<Outlet />
		</MovieDetailsWrapper>
	)
}

MovieDetails.propTypes = {}

MovieDetails.defaultProps = {}

export default MovieDetails
