import axios from 'axios'

const API_KEY = '3cfc4cc3ed7c09ed117ed148c7a04c75'

export const getDetails = async (movieId) => {
	const details = await axios.get(
		`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  )
    return details.data
}
