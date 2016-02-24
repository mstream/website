import keymirror from "keymirror";

const Actions = keymirror({
    ADD_ARTICLE: null,
    ADD_CATEGORY_TAG: null,
    ENABLE_CATEGORY_FILTER: null,
    DISABLE_CATEGORY_FILTER: null,
    REQUEST_ARTICLES: null,
    RECEIVE_ARTICLES: null,
    REQUEST_ARTICLE_CONTENT: null,
    RECEIVE_ARTICLE_CONTENT: null,
    REQUEST_ARTICLE_COMMENTS: null,
    RECEIVE_ARTICLE_COMMENTS: null
});

export default Actions;