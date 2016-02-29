import React, {PropTypes} from "react";
import { Link } from "react-router"


const CommentsListItem = ({
    id,
    content,
    author,
    dateCreated
    }) => (
    <li>
        <div className="collection-item avatar">
            <i className="material-icons circle">person</i>
            <span className="title"><em>{author}</em> <small>{dateCreated}</small></span>
            <p>{content}</p>
        </div>
    </li>
);


CommentsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    dateCreated: PropTypes.object.isRequired
};


export default CommentsListItem;