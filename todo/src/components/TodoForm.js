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
        this.props.addTodo(this.state.todo);
        this.setState({ newMember: '' });
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
                <button onClick={this.addFriend}>Add Todo</button>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        members: state.members
    };
};

export default connect(
    mapStateToProps
)(TodoForm);