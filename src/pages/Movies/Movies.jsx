import { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes, { func } from 'prop-types'
import { getMovies } from '../../services/getMovies'
import {
	MoviesWrapper,
	SearchForm,
	SearchInput,
    SubmitSearchBtn,
    MoviesList,
    MoviesItem
} from './Movies.styled'

const Movies = () => {
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState()

    const submitSearchHandler = (e) => {
        e.preventDefault()
        console.log(query)
        async function fetchData() {
            const moviesList = await getMovies(query)
            setMovies(moviesList)
        }
        fetchData()
	}

	const changeSearchHandler = (e) => {
        const value = e.target.value
		setQuery(value)
	}

	return (
		<MoviesWrapper>
			<SearchForm onSubmit={submitSearchHandler}>
				<SearchInput type="text" onChange={changeSearchHandler} />
				<SubmitSearchBtn type="submit">Search</SubmitSearchBtn>
			</SearchForm>
			<MoviesList>
				{movies &&
					movies.map(({ title, id, poster_path }) => (
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
		</MoviesWrapper>
	)
}

Movies.propTypes = {}

Movies.defaultProps = {}

export default Movies
