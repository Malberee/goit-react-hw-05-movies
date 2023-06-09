import { useEffect, useState } from 'react'
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

	const q = searchParams.get('q')

	useEffect(() => {
		if (!q) return
		async function fetchData() {
			try {
				setIsLoading(true)
				const moviesList = await getMovies(q)
				setMovies(moviesList)
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [q])

	const submitSearchHandler = (e) => {
		e.preventDefault()
		const q = e.target.search.value.trim().toLowerCase()

		if (!q) return

		setSearchParams({ q })
	}

	return (
		<MoviesWrapper>
			<SearchForm onSubmit={submitSearchHandler}>
				<SearchInput type="text" name="search" defaultValue={q} />
				<SubmitSearchBtn type="submit">Search</SubmitSearchBtn>
			</SearchForm>
			{movies && <MoviesList movies={movies} />}
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
