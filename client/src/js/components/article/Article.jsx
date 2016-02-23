import React from "react";
import { Link } from "react-router";
import {articleContentTransformation} from "./ArticleContentTransformation";


const Article = class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isLoading) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            );
        }
        const {title, dateCreated, content} = this.props.article;
        const rawContent = {__html: articleContentTransformation(content)};
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
    }

    componentDidUpdate() {
        if (!this.props.isLoading) {
            $(".scrollspy").scrollSpy();
        }
    }
};


export default Article;