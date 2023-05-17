import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    padding: 0 15px;
`;

export const Navigation = styled.nav`
    display: flex;
    gap: 30px;
    padding: 15px;
`

export const NavigationLink = styled(NavLink)`
transition: transform 100ms linear;
    &.active {
        color: white;
        transform: scale(1.1);
    }
`