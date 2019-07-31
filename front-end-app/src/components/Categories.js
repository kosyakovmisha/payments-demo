import React from 'react';

export class Categories extends React.Component {

    componentDidMount() {
        this.props.getCategories();
        console.log(this.props.categories);
    }

    renderTemplate = () => {
        console.log(this.props.categories);
        return this.props.categories.map(entry=> (
            <tr key={entry.id}>
                <td>{entry.name}</td>
                <td>{entry.description}</td>
            </tr>
        ));
    };

    render() {
        console.log(this.props.categories);
        return (
            <div>
                <h1>Categories</h1>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <th>Name</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                    {this.props.categories.map(entry=> (
                        <tr key={entry.id}>
                            <td>{entry.name}</td>
                            <td>{entry.description}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        )
    };
}