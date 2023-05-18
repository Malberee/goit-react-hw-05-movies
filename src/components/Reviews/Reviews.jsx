import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { Oval } from 'react-loader-spinner'
import { getReviews } from '../../services/getDetails'
import { ReviewsWrapper, ReviewsList, ReviewsItem } from './Reviews.styled'

const Reviews = () => {
	const { movieId } = useParams()
	const [isLoading, setIsLoading] = useState(false)
	const [reviews, setReviews] = useState()

	useEffect(() => {
		async function fetchData() {
			try {
				setIsLoading(true)
				const newReviews = await getReviews(movieId)
				setReviews(newReviews)
			} catch (err) {
				console.log(err)
			} finally {
				setIsLoading(false)
			}
		}
		fetchData()
	}, [])

	return (
		<ReviewsWrapper>
			{reviews && reviews.length ? (
				<ReviewsList>
					{reviews.map(({ id, author, content }) => (
						<ReviewsItem key={id}>
							<h3>{author}</h3>
							<p>{content}</p>
						</ReviewsItem>
					))}
				</ReviewsList>
			) : <p>We don`t have any reviews for this movie.</p>}
		</ReviewsWrapper>
	)
}

Reviews.propTypes = {}

Reviews.defaultProps = {}

export default Reviews
