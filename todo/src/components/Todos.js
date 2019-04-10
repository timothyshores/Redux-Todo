import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const Todos = props => {
    const style = {
        listStyleType: 'none',
        margin: '10px'
    }

    return (
        <>
            {props.todos && props.todos.map((todo, index) => (
                <li style={style} key={todo.id}>{todo.todo}</li>
            ))}
        </>
    );
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps, { addTodo }
)(Todos);