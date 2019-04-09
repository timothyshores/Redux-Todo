import React from 'react';
import { connect } from 'react-redux';

const Todos = props => {
    return (
        <h2>Todos Component</h2>
    );
};

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps
)(Todos);