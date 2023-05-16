import React from 'react'
import { Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Container, Navigation, NavigationLink } from './SharedLayout.styled'

const SharedLayout = () => (
	<Container>
		<Navigation>
			<NavigationLink to="/">Home</NavigationLink>
			<NavigationLink to="/movies">Movies</NavigationLink>
		</Navigation>
		<Outlet />
	</Container>
)

SharedLayout.propTypes = {}

SharedLayout.defaultProps = {}

export default SharedLayout
