import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/marvel-logo.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="logo">
                    <img src={logo} alt="logo marvel"/>
                </div>
                <nav>
                    <h1 hidden>Marvel List</h1>
                    <Link to="/">Home</Link>
                    <Link to="/personaggi">Personaggi</Link>
                    <Link to="/film">Film</Link>
                </nav>
            </div>
        )
    }
}
