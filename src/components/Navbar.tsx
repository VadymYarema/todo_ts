import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav>
            <div className="nav-wrapper green darken-4 px1">
                <NavLink to="/" className="brand-logo">MainPage</NavLink>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/todos">ToDo</NavLink></li>
                    <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
                    
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
