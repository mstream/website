import React from "react";
import { Link } from "react-router";
import {articleContentTransformation} from "./ArticleContentTransformation";


const Article = class extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
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

    componentDidMount() {
        $(".scrollspy").scrollSpy();
    }
};


export default Article;