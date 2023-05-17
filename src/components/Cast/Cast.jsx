import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getCast } from '../../services/getDetails'
import { CastWrapper, CastList, CastItem } from './Cast.styled'
import { useParams } from 'react-router-dom'

const Cast = () => {
	const { movieId } = useParams()
	const [cast, setCast] = useState()
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true)
				const newCast = await getCast(movieId)
				console.log(newCast)
				setCast(newCast)
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])

	return (
		<CastWrapper>
			{cast ? (
				<CastList>
					{cast.map(({ character, id, original_name, profile_path }) => (
						<CastItem key={id}>
							<img
								src={`https://image.tmdb.org/t/p/w500${profile_path}`}
								alt="actor"
								width="200"
							/>
							<h3>{original_name}</h3>
						</CastItem>
					))}
				</CastList>
			) : <p>Error 404. Not found. </p>}
		</CastWrapper>
	)
}

Cast.propTypes = {}

Cast.defaultProps = {}

export default Cast
