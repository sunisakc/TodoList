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
    return (
      <div style={this.getStyle()}>
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}
//PropTypes
Todoitems.propTypes = {
  todo: PropTypes.object.isRequired
}


export default Todoitems
