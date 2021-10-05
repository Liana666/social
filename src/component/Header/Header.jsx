import React from 'react';
import logo from './logo.png';
import './Header.css'

function Header() {
    return (
        <header className="App-header">
            <img src={logo} style={{ height: 50 }} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header;