import Immutable from "immutable";
import {handleActions} from "redux-actions";
import Actions from "../actions/Actions";


const initialState = {
    articles: Immutable.Map(),
    categories: Immutable.Map()
};

const handlers = {
    [Actions.ADD_ARTICLE]: (state, action) => {
        const articles = state.articles.set(
            action.payload.id,
            action.payload
        );
        return Object.assign(
            {},
            state,
            {articles}
        );
    },
    [Actions.ADD_CATEGORY_TAG]: (state, action) => {
        const categories = state.categories.set(
            action.payload.name,
            action.payload.name
        );
        return Object.assign(
            {},
            state,
            {categories}
        );
    },
    [Actions.RECEIVE_ARTICLES]: (state, action) => {
        const articles = Immutable.Map(
            action.payload.map(article => [article.id, article])
        );
        return Object.assign(
            {},
            state,
            {articles}
        );
    },
    [Actions.RECEIVE_ARTICLE_CONTENT]: (state, action) => {
        const articles = state.articles.set(action.payload.id, action.payload);
        return Object.assign(
            {},
            state,
            {articles}
        );
    },
    [Actions.RECEIVE_ARTICLE_COMMENTS]: (state, action) => {
        const comments = Immutable.Map(
            action.payload.comments.map(comment => [comment.id, comment])
        );
        return Object.assign(
            {},
            state,
            {comments}
        );
    }
};

const entities = handleActions(
    handlers,
    initialState
);


export default entities;