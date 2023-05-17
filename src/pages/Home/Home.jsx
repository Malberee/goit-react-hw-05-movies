import React, { useState, useEffect } from 'react'
import { Oval } from 'react-loader-spinner'
import PropTypes, { func } from 'prop-types'
import { HomeWrapper } from './Home.styled'
import MoviesList from '../../components/MoviesList'
import { getTrending } from '../../services/getTrending'

const Home = () => {
	const [trending, setTrending] = useState()
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true)
				const movies = await getTrending()
				setTrending(movies)
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])

	return (
		<HomeWrapper>
			{trending && <MoviesList movies={trending} fromPage="/" />}
			{isLoading && (
				<Oval
					height={80}
					width={80}
					color="#ffffff"
					wrapperStyle={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						width: '100%',
						height: '100vh',
					}}
					wrapperClass=""
					visible={true}
					ariaLabel="oval-loading"
					secondaryColor="#ffffff"
					strokeWidth={2}
					strokeWidthSecondary={2}
				/>
			)}
		</HomeWrapper>
	)
}

Home.propTypes = {}

Home.defaultProps = {}

export default Home
