import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Oval } from 'react-loader-spinner'
import { Container, Navigation, NavigationLink } from './SharedLayout.styled'

const SharedLayout = () => (
	<Container>
		<Navigation>
			<NavigationLink to="/">Home</NavigationLink>
			<NavigationLink to="/movies">Movies</NavigationLink>
		</Navigation>
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
	</Container>
)

SharedLayout.propTypes = {}

SharedLayout.defaultProps = {}

export default SharedLayout
