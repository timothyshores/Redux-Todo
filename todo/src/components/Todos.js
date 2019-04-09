import React from 'react';
import { connect } from 'react-redux';

const Todos = props => {
    console.log('Todos props: ', props);

    const style = {
        listStyleType: 'none',
        margin: '10px'
    }

    return (
        <>
            {props.todos.map((todo, index) => (
                <li style={style} key={todo.id}>{todo.todo}</li>
            ))}
        </>
    );
}

const mapStateToProps = state => {
    console.log('Todo mapStateToProps', state);
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps
)(Todos);