import React, {PropTypes} from "react";
import { Link } from "react-router"


const CommentsListItem = ({
    id,
    content,
    author,
    dateCreated
    }) => {
    return (
        <li>
            <div className="collection-item">
                <p>{content}</p>
            </div>
        </li>
    );
};

CommentsListItem.propTypes = {
    id: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    dateCreated: PropTypes.object.isRequired
};


export default CommentsListItem;