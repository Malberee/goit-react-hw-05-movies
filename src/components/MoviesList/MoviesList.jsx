import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { MoviesListWrapper, MoviesItem } from './MoviesList.styled'

const MoviesList = ({ movies, fromPage }) => {
	return (
		<MoviesListWrapper>
			{movies.map(({ title, id, poster_path }) => (
				<MoviesItem key={id}>
					<Link to={`/movies/${id}`} state={{from: fromPage}}>
						<img
							src={`https://image.tmdb.org/t/p/w500${poster_path}`}
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

MoviesList.propTypes = {}

MoviesList.defaultProps = {}

export default MoviesList
