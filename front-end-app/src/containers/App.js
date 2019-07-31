import React, { Component } from 'react';
import { HeaderRouter } from '../router/HeaderRouter';
import { Header as AppHeader} from '../components/Header';
import { Container } from 'react-bootstrap';

class App extends Component{
    render() {
        const { data, getCategories } = this.props;
        return (
            <React.Fragment>
                <Container>
                    <HeaderRouter />
                </Container>
            </React.Fragment>
        )
    };
}

export default App;