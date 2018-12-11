import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'
import ToDoContainer from './Containers/ToDoContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
        <ToDoContainer />
      </div>
    );
  }
}

export default App;
