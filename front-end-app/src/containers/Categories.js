import React, { Component } from 'react';
import { Categories as CategoryTable } from '../components/Categories';
import { connect } from 'react-redux';
import { getCategories } from "../actions/categories";

class Categories extends Component {
    render() {
        const { categories, getCategories } = this.props;
        return (
            <CategoryTable categories={categories.list} getCategories={getCategories}/>
        );
    };

}

const mapStateToProps = store => {
    return {
        categories: store
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getCategories: dispatch(getCategories)
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);