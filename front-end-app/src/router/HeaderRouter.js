import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from '../components/Home';
import { About } from '../components/About';
import  Categories  from '../containers/Categories';
import { Payments } from '../components/Payments';
import { CategoryEdit } from "../components/CategoryEdit";
import { AddCategoryForm } from "../components/AddCategoryForm";

export const HeaderRouter = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/payments" component={Payments}/>
            <Route exact path="/categories" component={Categories}/>
            <Route path="/categories/:id" components={CategoryEdit}/>
            <Route path="/categories/add" components={AddCategoryForm}/>
            <Route component={Home}/>
        </Switch> 
    </Router>
)

