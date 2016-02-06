import React from "react";
import { Link } from 'react-router'

export default class ArticleHeader extends React.Component {
    render() {
        const {id, title, summary, dateCreated} = this.props.article;
        const url = `/articles/${id}`;
        return (
            <li>
                <Link to={url} className="list-group-item">
                    <article className="media">
                        <figure className="media-left media-top">
                            <img
                                src="http://placehold.it/200x200"/>
                        </figure>
                        <div className="media-body">
                            <header>
                                <h2>{title}</h2>
                            </header>
                            <p>{summary}</p>
                            <footer>
                                <h6 className="text-right">
                                    <em>Created: <strong><time>{dateCreated.toDateString()}</time></strong>
                                    </em>
                                </h6>
                            </footer>
                        </div>
                    </article>
                </Link>
            </li>
        );
    }
}
