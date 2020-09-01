import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';
import * as actions from 'actionTypes';
// import { Container } from 'utils/styles/global';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import icon from 'assets/account_circle-white-18dp.svg';

const LinkItem = styled(Link)<{ padding?: string }>`
  text-decoration: none;
  color: var(--light);
  padding: ${p => p.padding || '0 5px'};

  &:hover {
    text-decoration: none;
    color: unset;
  }
`;

const MenuItem = styled(LinkItem)<{ isActive: boolean }>`
  text-transform: capitalize;
  color: ${p => (p.isActive ? 'var(--warning)' : 'unset')};

  &:hover {
    color: var(--yellow);
  }
`;

const Navigation: React.FC<{}> = props => {
  const location = useLocation();
  const dispatch = useDispatch();
  const showModal = () => {
    dispatch({
      type: actions.SHOW_MODAL,
      payload: {
        heading: 'Login using Mobile',
      },
    });
  };

  return (
    <Navbar bg="dark" expand="md" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <LinkItem to="/" padding="0">
            EGAMERS
          </LinkItem>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <MenuItem to="/" className="nav-item" role="button" isActive={location.pathname === '/'}>
              Home
            </MenuItem>

            <MenuItem
              to="/tournaments"
              className="nav-item"
              role="button"
              isActive={location.pathname === '/tournaments'}
            >
              Tournaments
            </MenuItem>

            <MenuItem
              to="/contact-us"
              className="nav-item"
              role="button"
              isActive={location.pathname === '/contact-us'}
            >
              Contact Us
            </MenuItem>
          </Nav>

          <img src={icon} alt="P" height="30" width="30" onClick={showModal} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
