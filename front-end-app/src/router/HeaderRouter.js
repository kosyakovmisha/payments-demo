import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import { Categories } from '../components/Categories';
import { Payments } from '../components/Payments';

export const HeaderRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/payments" component={Payments}/>
            <Route exact path="/categories" component={Categories}/>
            <Route component={Home}/>
        </Switch> 
    </Router>
)

