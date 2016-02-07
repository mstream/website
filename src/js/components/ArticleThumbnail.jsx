import React, {PropTypes} from "react";
import { Link } from 'react-router'

const ArticleThumbnail = ({id, title, summary, dateCreated}) => {
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
                                <em>Created: <strong>
                                    <time>{dateCreated.toDateString()}</time>
                                </strong>
                                </em>
                            </h6>
                        </footer>
                    </div>
                </article>
            </Link>
        </li>
    );
};

ArticleThumbnail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    dateCreated: PropTypes.object.isRequired
};

export default ArticleThumbnail;