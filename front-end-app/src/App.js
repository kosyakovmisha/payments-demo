import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderRouter } from './router/HeaderRouter';
import { Header as AppHeader} from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <React.Fragment>
      <AppHeader />
      <Container>
        <HeaderRouter />
      </Container>
    </React.Fragment>
  );
}

export default App;
