import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MoviesListWrapper, MoviesItem } from './MoviesList.styled'

const MoviesList = ({ movies }) => {
	const location = useLocation()
	return (
		<MoviesListWrapper>
			{movies.map(({ title, id, poster_path }) => (
				<MoviesItem key={id}>
					<Link to={`/movies/${id}`} state={{ from: location }}>
						<img
							src={
								poster_path === null
									? 'https://www.metmuseum.org/content/img/placeholders/NoPosterAvailable_placeholder_160x220.png'
									: `https://image.tmdb.org/t/p/w500${poster_path}`
							}
							alt="movie poster"
							width="200"
						/>
						{title}
					</Link>
				</MoviesItem>
			))}
		</MoviesListWrapper>
	)
}

MoviesList.propTypes = {
	movies: PropTypes.array.isRequired,
}

MoviesList.defaultProps = {}

export default MoviesList
