import React from 'react';

export class Categories extends React.Component {


    getCategoriesList = () => {
        this.props.getCategories();
        return this.props.categories.map(category => {
            return(
                <tr key={category.id}>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                </tr>
            )
        })
    };

    render() {
        return (
            <div>
                <h1>Categories</h1>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <th>Name</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                    {this.getCategoriesList}
                    </tbody>
                </table>
            </div>

        )
    };
}