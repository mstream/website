import React from "react";
import ReactDOM from "react-dom";
import FilterableArticlesList from "./containers/filterableArticlesList/FilterableArticlesList";
import Article from "./components/Article.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from "react-redux"
import store from "./Store";


const App = (props) => (
    <div className="content">
        <Header/>
        <Main children={props.children}/>
        <Footer/>
    </div>
);

const Placeholder = () => (
    <p className="flow-text">placeholder</p>
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Placeholder}/>
                <Route path="articles" component={FilterableArticlesList}/>
                <Route path="articles/:id" component={Article}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("content")
);