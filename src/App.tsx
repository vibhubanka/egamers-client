import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from '@emotion/styled';
import Navigation from 'components/Navigation';
import Modal from 'components/Modal';
import Routes from 'routes';

const AppContainer = styled.div`
  background-color: var(--dark);
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer className="app">
      <Router>
        <Navigation />

        <Routes />

        <Modal />
      </Router>
    </AppContainer>
  );
}

export default App;
