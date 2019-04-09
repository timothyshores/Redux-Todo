import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends React.Component {
    state = {
        todo: ''
    };

    handleChanges = e => {
        this.setState({
            todo: e.target.value
        });
    };

    addTodo = e => {
        e.preventDefault();
        console.log('TodoForm addTodo: ', this);
        this.props.addTodo(this.state.todo);
        this.setState({ todo: '' });
    };

    render() {
        return (
            <>
                <input
                    type="text"
                    value={this.state.todo}
                    placeholder="Add a new todo"
                    onChange={this.handleChanges}
                />
                <button onClick={this.addTodo}>Add Todo</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    console.log('todoForm state', state)
    return {
        todo: state.todos
    };
};

export default connect(
    mapStateToProps, { addTodo }
)(TodoForm);