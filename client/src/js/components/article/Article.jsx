import React from "react";
import { Link } from "react-router";
import CommentsListContainer from "../../containers/commentsList/CommentsListContainer";


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
        const {id, title, dateCreated, content} = this.props.article;
        return (
            <div>
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
                <section id="comments" className="section scrollspy">
                    <CommentsListContainer articleId={id}/>
                </section>
            </div>
        );
    }

    componentDidUpdate() {
        if (!this.props.isLoading) {
            $(".scrollspy").scrollSpy();
        }
    }
};


export default Article;