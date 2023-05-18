import axios from "axios";

const API_KEY = '3cfc4cc3ed7c09ed117ed148c7a04c75'

export const getMovies = async (query) => {
	const movies = await axios.get(
		`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
	)
	return movies.data.results
}