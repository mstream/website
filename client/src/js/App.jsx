import React from "react";
import ReactDOM from "react-dom";
import ArticlesListContainer from "./containers/articlesList/ArticlesListContainer";
import ArticleContainer from "./containers/article/ArticleContainer";
import CategoriesListsContainer from "./containers/categoriesLists/CategoriesListsContainer";
import HeadersListContainer from "./containers/headersList/HeadersListContainer";


import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { Router, Route, IndexRoute, Link, createMemoryHistory } from "react-router"
import { Provider } from "react-redux"
import store from "./Store";


const history = createMemoryHistory(location);

const App = (props) => (
    <div className="content">
        <Header sidebarContent={props.sidebar}/>
        <Main content={props.content}/>
        <Footer/>
    </div>
);

const Placeholder = () => (
    <p className="flow-text">placeholder</p>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute components={{
                            content: Placeholder,
                            sidebar: Placeholder}}/>
                <Route path="articles"
                       components={{
                            content: ArticlesListContainer,
                            sidebar: CategoriesListsContainer}}/>
                <Route path="articles/:id"
                       components={{
                            content: ArticleContainer,
                            sidebar: HeadersListContainer}}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("content")
);