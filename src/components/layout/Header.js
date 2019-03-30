import React from 'react'

function Header() {
  return (
    <header style={headerStyle}>
        <h1>TodoList</h1>

    </header>
  )
}

const headerStyle = {
    background: '#a00889',
    color: '#f4f6f9',
    textAlign: 'center',
    padding: '10px'
}
export default Header;