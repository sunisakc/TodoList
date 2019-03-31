import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import About from './components/pages/About';
//import uuid from 'uuid';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    todos: [ ]
  }

   componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
     .then(res => this.setState({todos:res.data}))
   }
   markComplete = (id) => {
     this.setState({ todos : this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
   }
   //Delete
   delTodo = (id) => {
     axios.delete(`ttps://jsonplaceholder.typicode.com/todos/${id}`)
     .then( res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id
      !== id)]}));
    }
   //Addtodo
   Addtodo = (title) => {
     axios.post('https://jsonplaceholder.typicode.com/todos', {
       title,
       completed:false
     })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
     
   }
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
        <Header />
        <Route exact path="/" render={props =>(
          <React.Fragment>
           <Addtodo Addtodo={this.Addtodo}/>
           <Todos todos={this.state.todos} markComplete={this.markComplete}
           delTodo={this.delTodo}/>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
