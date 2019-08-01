import React, { Component } from 'react';
import { HeaderRouter } from '../router/HeaderRouter';
import { Header as AppHeader} from '../components/Header';
import { Container } from 'react-bootstrap';

class App extends Component{
    render() {
        return (
            <React.Fragment>
                <Container>
                    <AppHeader />
                    <HeaderRouter />
                </Container>
            </React.Fragment>
        )
    };
}

export default App;