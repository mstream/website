import React from "react";
import { Link } from 'react-router'
import SideBar from "./SideBar.jsx";


const Header = (props) => (
    <header>
        <div className="navbar-fixed">
            <nav>
                <div className="right nav-wrapper">
                    <ul >
                        <li><Link to="/articles">articles</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
        <SideBar content={props.sidebarContent}/>
    </header>
);


export default Header;


