import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Check emails',
        completed: false
      },
      {
        id: 2,
        title: 'Make Telephone calls',
        completed: false
      },
      {
        id: 3,
        title: 'Write articles',
        completed: false
      },
      {
        id: 4,
        title: 'Ansers emails',
        completed: false
      }
    ]
  }
  render() {
    
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
