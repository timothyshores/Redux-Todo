import React, { Component } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>Todo App</h1>
                <Todos />
                <TodoForm />
            </div>
        );
    }
}

export default App;
