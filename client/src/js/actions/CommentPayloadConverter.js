const convertCommentPayload = commentJson => {
    const dateCreated = new Date(commentJson.dateCreated);
    return Object.assign(
        {},
        commentJson,
        {dateCreated}
    );
};


export {convertCommentPayload};