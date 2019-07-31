import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import  Categories  from '../containers/Categories';
import { Payments } from '../components/Payments';
import { Header as AppHeader} from "../components/Header";

export const HeaderRouter = () => (
    <Router>
        <AppHeader />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/payments" component={Payments}/>
            <Route exact path="/categories" component={Categories}/>
            <Route component={Home}/>
        </Switch> 
    </Router>
)

