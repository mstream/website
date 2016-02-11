import React from "react";
import { Link } from 'react-router'


const Header = () => (
    <div className="row">
        <nav className="nav-wrapper">
            <Link className="brand-logo left" to="/"></Link>
        </nav>
        <ul className="tabs">
            <li className="tab col s2"><Link to="/articles">articles</Link></li>
            <li className="tab col s2 "><Link to="/xxx">xxx</Link></li>
            <li className="tab col s2"><Link to="/yyy">yyy</Link></li>
        </ul>
    </div>
);


export default Header;


