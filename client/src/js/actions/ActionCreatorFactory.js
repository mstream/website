import fetch from "isomorphic-fetch";
import { createAction } from "redux-actions";
import Actions from "./Actions";
import {convertArticlePayload} from "./ArticlePayloadConverter";
import {convertArticlesPayload} from "./ArticlesPayloadConverter";
import {convertCommentsPayload} from "./CommentsPayloadConverter";


const requestArticles = createAction(Actions.REQUEST_ARTICLES);
const receiveArticles = createAction(Actions.RECEIVE_ARTICLES);
const requestArticleContent = createAction(Actions.REQUEST_ARTICLE_CONTENT);
const receiveArticleContent = createAction(Actions.RECEIVE_ARTICLE_CONTENT);
const requestArticleComments = createAction(Actions.REQUEST_ARTICLE_COMMENTS);
const receiveArticleComments = createAction(Actions.RECEIVE_ARTICLE_COMMENTS);


const ActionCreatorFactory = class {

    constructor(idGenerator, buildUrl = url => url) {

        const idSupplier = payload => payload.id ? payload : Object.assign(
            {},
            {id: idGenerator()},
            payload
        );

        this.addArticle = createAction(Actions.ADD_ARTICLE, idSupplier);
        this.addCategoryTag = createAction(Actions.ADD_CATEGORY_TAG);
        this.enableCategoryFilter = createAction(Actions.ENABLE_CATEGORY_FILTER);
        this.disableCategoryFilter = createAction(Actions.DISABLE_CATEGORY_FILTER);
        this.fetchArticles = () => dispatch => {
            dispatch(requestArticles());
            return fetch(buildUrl("/api/articles"))
                .then(response => response.json())
                .then(json => convertArticlesPayload(json))
                .then(articles => dispatch(receiveArticles(articles)))
                .catch(error => dispatch(receiveArticles(error)))
        };
        this.fetchArticleContent = articleId => dispatch => {
            dispatch(requestArticleContent());
            return fetch(buildUrl(`/api/articles/${articleId}`))
                .then(response => response.json())
                .then(json => convertArticlePayload(json))
                .then(articleWithContent => dispatch(receiveArticleContent(articleWithContent)))
                .catch(error => dispatch(receiveArticleContent(error)))
        };
        this.fetchArticleComments = articleId => dispatch => {
            dispatch(requestArticleComments({articleId}));
            return fetch(buildUrl(`/api/articles/${articleId}/comments`))
                .then(response => response.json())
                .then(json => convertCommentsPayload(json))
                .then(comments => dispatch(receiveArticleComments({
                    articleId,
                    comments
                })))
                .catch(error => dispatch(receiveArticleComments({
                    articleId,
                    error
                })))
        };
    }
};


export default ActionCreatorFactory;