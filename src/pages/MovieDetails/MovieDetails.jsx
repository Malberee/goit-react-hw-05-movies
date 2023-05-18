import { useState, useEffect, Suspense, useRef } from 'react'
import { useParams, Link, Outlet, useLocation } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import PropTypes from 'prop-types'
import moment from 'moment'
import { getDetails } from '../../services/getDetails'
import {
	MovieDetailsWrapper,
	MoreInfo,
	MovieDetailsContent,
} from './MovieDetails.styled'

const MovieDetails = () => {
	const location = useLocation()
	const backLinkHref = useRef(location.state?.from ?? '/movies')
	const { movieId } = useParams()
	const [movieDetails, setMovieDetails] = useState()
	const [isLoading, setIsLoading] = useState(false)

	const getReleaseYear = (date) => {
		const year = new Date(date)
		return `(${moment(year).year()})`
	}

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true)
				const details = await getDetails(movieId)
				setMovieDetails(details)
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])

	return (
		<>
			{movieDetails && (
				<>
					<Link to={backLinkHref.current}>Go back</Link>
					<MovieDetailsWrapper>
						<img
							src={
								movieDetails.poster_path === null
									? 'https://www.metmuseum.org/content/img/placeholders/NoPosterAvailable_placeholder_160x220.png'
									: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
							}
							alt=""
							width="300"
						/>
						<MovieDetailsContent>
							<h2>
								{movieDetails.title} {getReleaseYear(movieDetails.release_date)}
							</h2>

							<div>
								<h3>Overview</h3>
								<p>{movieDetails.overview}</p>
							</div>

							<div>
								<h3>Genres</h3>
								<p>{movieDetails.genres.map(({ name }) => `${name} `)}</p>
							</div>
						</MovieDetailsContent>
					</MovieDetailsWrapper>

					<MoreInfo>
						<Link to="cast">Cast</Link>
						<Link to="reviews">Reviews</Link>
					</MoreInfo>
					<Suspense
						fallback={
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
						}
					>
						<Outlet />
					</Suspense>
				</>
			)}
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
		</>
	)
}

MovieDetails.propTypes = {}

MovieDetails.defaultProps = {}

export default MovieDetails
