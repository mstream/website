import React from "react";
import ReactDOM from "react-dom";
import FilterableArticlesList from "./containers/filterableArticlesList/FilterableArticlesList.js";
import Article from "./components/Article.jsx";
import FilterableCategoriesList from "./containers/filterableCategoriesList/FilterableCategoriesList";
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import { Provider } from "react-redux"
import store from "./Store";


class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <nav className="navbar navbar-default navbar-static-top">
                        <Link className="navbar-brand" to="/"></Link>
                        <ul className="nav navbar-nav navbar-left">
                            <li><Link to="/articles">articles</Link></li>
                            <li><Link to="/xxx">xxx</Link></li>
                            <li><Link to="/yyy">yyy</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class Articles extends React.Component {
    render() {
        return (
            <div>
                <aside className="col-md-3">
                    <FilterableCategoriesList/>
                </aside>
                <main className="col-md-8 col-md-offset-1">
                    <FilterableArticlesList/>
                </main>
            </div>
        );
    }
}

class Placeholder extends React.Component {
    render() {
        return (
            <div>
                placeholder
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Placeholder}/>
                <Route path="/articles" component={Articles}></Route>
                <Route path="/articles/:id" component={Article}></Route>
                <Route path="/xxx" component={Placeholder}></Route>
                <Route path="/yyy" component={Placeholder}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("content")
);