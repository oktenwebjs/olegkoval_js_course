import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NavbarComponent extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to={"/"} className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/users"} className="nav-link">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavbarComponent;