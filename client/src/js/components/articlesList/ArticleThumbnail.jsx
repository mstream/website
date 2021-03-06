import React, {PropTypes} from "react";
import { Link } from "react-router"


const ArticleThumbnail = ({id, title, summary, dateCreated, categories, onReadMoreClick}) => {
    const url = `/articles/${id}`;
    return (
        <li>
            <article className="card large hoverable main-foreground">
                <figure className="card-image">
                    <img src="http://placeimg.com/600/100/tech/grayscale"/>
                    <span className="card-title">{title}</span>
                </figure>
                <div className="card-content">
                    <p className="flow-text">{summary}</p>
                </div>
                <footer className="card-action">
                    <Link to={url}
                          onClick={() =>  onReadMoreClick(id)}>
                        Read more...
                    </Link>
                </footer>
            </article>
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