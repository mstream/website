import React from "react";
import { Link } from "react-router"
import marked from "marked";
import highlight from "highlight.js";
import * as ArticlesMock from "../mocks/ArticlesMock";

export default class Article extends React.Component {
    render() {
        const {dateCreated, content} = ArticlesMock.articles[0];
        const title = `Article #${this.props.params.id}`;
        const parsedContent = marked(
            content,
            {
                sanitize: true,
                highlight: function (code, lang) {
                    return highlight.highlightAuto(code, [lang]).value;
                }
            }
        );
        const rawContent = {__html: parsedContent};
        return (
            <article className="container-fluid">
                <header className="row page-header">
                    <h1>{title}</h1>
                    <p><em>Created: <strong><time>{dateCreated.toDateString()}</time></strong></em></p>
                </header>
                <div className="row">
                    <p><span dangerouslySetInnerHTML={rawContent}/></p>
                </div>
            </article>
        );
    }
}
