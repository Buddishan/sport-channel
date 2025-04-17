import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faCalendarAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const NavContainer = styled.nav`
  background: #1a1a1a;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:hover {
    color: #f0f0f0;
  }
`;

const NavText = styled.span`
  margin-top: 0.5rem;
`;

function Navigation() {
    return (
        <NavContainer>
            <NavItem to="/">
                <FontAwesomeIcon icon={faTv} size="lg" />
                <NavText>LIVE</NavText>
            </NavItem>
            <NavItem to="/schedule">
                <FontAwesomeIcon icon={faCalendarAlt} size="lg" />
                <NavText>SCHEDULE</NavText>
            </NavItem>
            <NavItem to="/on-demand">
                <FontAwesomeIcon icon={faPlayCircle} size="lg" />
                <NavText>ON DEMAND</NavText>
            </NavItem>
        </NavContainer>
    );
}

export default Navigation;