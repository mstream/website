import React from "react";
import { Link } from "react-router"
import marked from "marked";
import highlight from "highlight.js";


const Article = ({article}) => {
    const {title, dateCreated, content} = article;
    const parsedContent = marked(
        content, {
            sanitize: true,
            highlight: (code, lang) =>
                highlight.highlightAuto(code, [lang]).value
        }
    );
    const rawContent = {__html: parsedContent};
    return (
        <article className="container-fluid">
            <header className="row page-header">
                <h1>{title}</h1>
                <p><em>Created: <strong>
                    <time>{dateCreated.toDateString()}</time>
                </strong></em></p>
            </header>
            <div className="row">
                <p>
                    <span dangerouslySetInnerHTML={rawContent}/>
                </p>
            </div>
        </article>
    );
};


export default Article;