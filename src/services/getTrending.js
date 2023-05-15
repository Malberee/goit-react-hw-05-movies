import axios from 'axios'

const API_KEY = '3cfc4cc3ed7c09ed117ed148c7a04c75'

export const getTrending = async () => {
	const trending = await axios.get(
		`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`
    )
    return trending.data.results
}
