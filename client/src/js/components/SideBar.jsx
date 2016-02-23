import React from "react";
import { Link } from "react-router"
import CategoriesListsContainer from "../containers/categoriesLists/CategoriesListsContainer";


const SideBar = (props) => (
    <aside className="side-nav fixed">
        {props.content}
    </aside>
);


export default SideBar;


