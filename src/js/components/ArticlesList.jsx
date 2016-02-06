import React from "react";
import ArticleHeader from "./ArticleHeader.jsx";

export default class ArticlesList extends React.Component {
    render() {
        const articles = this.props.articles.map((article) =>
            <ArticleHeader key={article.id} article={article}/>);
        return (<ul className="list-unstyled list-group">{articles}</ul>);
    }
}
