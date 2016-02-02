import React from "react";
import ReactDOM from "react-dom";
import PostsList from "./components/PostsList.jsx";
import CategoriesList from "./components/CategoriesList.jsx";
import * as PostsMock from "./mocks/PostsMock";
import * as CategoriesMock from "./mocks/CategoriesMock";


ReactDOM.render(
    <div>
        <div className="row">
            <nav className="navbar navbar-default navbar-static-top">
                <a className="navbar-brand" href="#"></a>
                <ul className="nav navbar-nav navbar-left">
                    <li className="active"><a href="#">articles</a></li>
                    <li><a href="#">#tab#</a></li>
                    <li><a href="#">#tab#</a></li>
                </ul>
            </nav>
        </div>
        <div className="row">
            <aside className="col-md-3">
                <CategoriesList categories={CategoriesMock.categories}/>
            </aside>
            <main className="col-md-8 col-md-offset-1">
                <PostsList posts={PostsMock.posts}/>
            </main>
        </div>
    </div>,
    document.getElementById("content")
);