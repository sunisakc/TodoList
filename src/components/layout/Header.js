import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>
        <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>

    </header>
  )
}

const headerStyle = {
    background: '#a00889',
    color: '#f4f6f9',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color:"#3d0b03",
    textDecoration:'none'
    
    
}
export default Header;