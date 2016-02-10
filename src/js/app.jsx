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
                    <nav className="nav-wrapper">
                        <Link className="brand-logo left" to="/"></Link>
                    </nav>
                    <ul className="tabs">
                        <li className="tab col s2"><Link to="/articles">articles</Link></li>
                        <li className="tab col s2 "><Link to="/xxx">xxx</Link></li>
                        <li className="tab col s2"><Link to="/yyy">yyy</Link></li>
                    </ul>
                </div>
                <div className="row">
                    {this.props.children}
                </div>
                <div className="row">
                    <footer className="page-footer">
                        <div className="footer-copyright">
                            © 2016 Maciej Laciak
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

class Articles extends React.Component {
    render() {
        return (
            <div>
                <aside className="col s3">
                    <FilterableCategoriesList/>
                </aside>
                <main className="col s8 offset-s1">
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
                <Route path="articles" component={Articles}></Route>
                <Route path="articles/:id" component={Article}></Route>
                <Route path="xxx" component={Placeholder}></Route>
                <Route path="yyy" component={Placeholder}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("content")
);