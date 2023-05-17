import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PropTypes, { func } from 'prop-types'
import { Oval } from 'react-loader-spinner'
import { getMovies } from '../../services/getMovies'
import MoviesList from '../../components/MoviesList'
import {
	MoviesWrapper,
	SearchForm,
	SearchInput,
	SubmitSearchBtn,
} from './Movies.styled'

const Movies = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	// const [query, setQuery] = useState('')
	const [movies, setMovies] = useState()
	const [isLoading, setIsLoading] = useState(false)

	const submitSearchHandler = (e) => {
		e.preventDefault()
		e.currentTarget.reset()
		async function fetchData() {
			try {
				setIsLoading(true)
				const moviesList = await getMovies(searchParams.get('q'))
				setMovies(moviesList)
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}

	const changeSearchHandler = (e) => {
		const value = e.target.value
		setSearchParams({q: value})
	}

	return (
		<MoviesWrapper>
			<SearchForm onSubmit={submitSearchHandler}>
				<SearchInput type="text" onChange={changeSearchHandler} />
				<SubmitSearchBtn type="submit">Search</SubmitSearchBtn>
			</SearchForm>
			{movies && <MoviesList movies={movies} fromPage="/movies"/>}
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
		</MoviesWrapper>
	)
}

Movies.propTypes = {}

Movies.defaultProps = {}

export default Movies
