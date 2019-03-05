import React, { Component } from 'react';
import Todos from './Todos'

class App extends Component {
  state = {
    todos: [
      { id: 1, todo: 'Create React To Do App' },
      { id: 2, todo: 'Add Redix to the To Do App' },
      { id: 3, todo: 'Commit and push code to GitHub' }
    ]
  }
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
