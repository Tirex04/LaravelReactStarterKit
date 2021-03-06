import React from 'react';
import {
    NavLink
} from 'react-router-dom'

const header = (props) => {
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="#">Navbar</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default header