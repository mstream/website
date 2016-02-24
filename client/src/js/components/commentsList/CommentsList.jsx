import React, {PropTypes} from "react";
import CommentListItem from "./CommentsListItem.jsx";


const CommentsList = ({
    isLoading,
    comments,
    }) => {
    if (isLoading) {
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );
    }
    const commentsFragment = comments.map((comment) => (
        <CommentListItem
            key={comment.id}
            {...comment}
        />
    ));
    return (
            <ul className="collection with-header">
                <li className="collection-header"><h4>Comments</h4></li>
                {commentsFragment}
            </ul>
    );
};

CommentsList.propTypes = {
};


export default CommentsList;