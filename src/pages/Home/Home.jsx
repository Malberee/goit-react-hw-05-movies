import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes, { func } from 'prop-types'
import { getTrending } from '../../services/getTrending'
import { HomeWrapper, MoviesList, MoviesItem } from './Home.styled'

const Home = () => {
	const [trending, setTrending] = useState()

	useEffect(() => {
		async function fetchData() {
			const films = await getTrending()
			setTrending(films)
		}
		fetchData()
	}, [])

	return (
		<HomeWrapper>
			<MoviesList>
				{trending &&
					trending.map(({ title, id, poster_path }) => (
						<MoviesItem key={id}>
							<Link to={`/movies/${id}`}>
								<img
									src={`https://image.tmdb.org/t/p/w500${poster_path}`}
									alt="movie poster"
									width="200"
								/>
								{title}
							</Link>
						</MoviesItem>
					))}
			</MoviesList>
		</HomeWrapper>
	)
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
