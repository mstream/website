import React from "react";
import ReactDOM from "react-dom";
import PostsList from "./components/PostsList.jsx";
import CategoriesList from "./components/CategoriesList.jsx";
import * as PostsMock from "./mocks/PostsMock";
import * as CategoriesMock from "./mocks/CategoriesMock";


ReactDOM.render(
    <div className="row">
        <aside className="col-lg-3">
            <CategoriesList categories={CategoriesMock.categories}/>
        </aside>
        <main className="col-lg-9">
            <PostsList posts={PostsMock.posts}/>
        </main>
    </div>,
    document.getElementById("content")
);