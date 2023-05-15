import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes, { func } from 'prop-types'
import { getTrending } from '../../services/getTrending'
import { HomeWrapper } from './Home.styled'

const Home = () => {
	const [trending, setTrending] = useState()

	useEffect(() => {
		async function fetchData() {
			const films = await getTrending()
			setTrending(films)
			console.log(films)
		}
		fetchData()
	}, [])

	return (
		<HomeWrapper>
			<ul>
				{trending &&
					trending.map(({ title, id }) => (
						<li key={id}>
							<Link to={`${id}`}>{title}</Link>
						</li>
					))}
			</ul>
		</HomeWrapper>
	)
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
