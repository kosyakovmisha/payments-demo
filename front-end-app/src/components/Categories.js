import React from 'react';
import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import {Link} from "react-router-dom";

export class Categories extends React.Component {

    componentDidMount() {
        this.props.getCategories();
        console.log(this.props.categories);
    }

    renderTemplate = () => {
        console.log(this.props.categories);
        return this.props.categories.map(entry => (
            <tr key={entry.id} className="d-flex">
                <td className="col-4">{entry.name}</td>
                <td className="col-6">{entry.description}</td>
                <td className="col-2 text-right">
                    <Link to={`/categories/${entry.id}`}>
                        <Button variant="outline-secondary" size="sm" className="mr-1">Change</Button>
                    </Link>
                    <Link>
                        <Button variant="outline-danger" size="sm">Delete</Button>
                    </Link>
                </td>
            </tr>
        ));
    };

    render() {
        console.log(this.props.categories);
        return (
            <div >
                <br/>
                <div className="row">
                    <div className="col-md-10 "><h2>Categories</h2></div>
                    <div className="col-md text-right"><Button variant="outline-dark" >Add Category</Button></div>
                </div>
                <div>
                    <table className="table table-hover">
                        <thead className="thead-dark">
                        <tr className="d-flex">
                            <th className="col-4">Name</th>
                            <th className="col-6">Description</th>
                            <th className="col-2"> </th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderTemplate()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    };
}
