import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Todoitems extends Component {
  getStyle = () => {
    return {
      background: '#eff1f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted' ,

      textDecoration: this.props.todo.completed ?
      'line-through' : 'none'
    
   }
  }

 
  render() {
    const { id, title} = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {''}
        { title }
        <button onClick ={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </p>
      </div>
    )
  }
}
//PropTypes
Todoitems.propTypes = {
  todo: PropTypes.object.isRequired,
  //PropType
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
const btnStyle = {
  background:'#c6075a',
  color:'#c9c5c7',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float:'right'
}
export default Todoitems
