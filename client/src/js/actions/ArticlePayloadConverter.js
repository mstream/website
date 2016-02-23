const convertArticlePayload = articleJson => {
    const dateCreated = new Date(articleJson.dateCreated);
    return Object.assign(
        {},
        articleJson,
        {dateCreated}
    );
};


export {convertArticlePayload};