import Immutable from "immutable";
import Actions from "../actions/Actions";
import {handleActions} from "redux-actions";


const initialState = {
    articlesList: {
        isFetching: false
    },
    articleView: {
        isFetchingContent: false,
        isFetchingComments: false
    }
};

const handlers = {
    [Actions.REQUEST_ARTICLES]: {
        next: (state, action) => Object.assign(
            {},
            state,
            {
                articlesList: Object.assign(
                    {},
                    state.articlesList,
                    {isFetching: true}
                )
            })
    },
    [Actions.RECEIVE_ARTICLES]: {
        next: (state, action) =>  Object.assign(
            {},
            state,
            {
                articlesList: Object.assign(
                    {},
                    state.articlesList,
                    {isFetching: false})
            }),
        throw: (state, action) => Object.assign(
            {},
            state,
            {
                articlesList: Object.assign(
                    {},
                    state.articlesList,
                    {isFetching: false})
            })
    },
    [Actions.REQUEST_ARTICLE_CONTENT]: {
        next: (state, action) => Object.assign(
            {},
            state,
            {
                articleView: Object.assign(
                    {},
                    state.articleView,
                    {isFetchingContent: true}
                )
            })
    },
    [Actions.RECEIVE_ARTICLE_CONTENT]: {
        next: (state, action) =>  Object.assign(
            {},
            state,
            {
                articleView: Object.assign(
                    {},
                    state.articleView,
                    {isFetchingContent: false})
            }),
        throw: (state, action) => Object.assign(
            {},
            state,
            {
                articleView: Object.assign(
                    {},
                    state.articleView,
                    {isFetchingContent: false})
            })
    },
    [Actions.REQUEST_ARTICLE_COMMENTS]: {
        next: (state, action) => Object.assign(
            {},
            state,
            {
                articleView: Object.assign(
                    {},
                    state.articleView,
                    {isFetchingComments: true}
                )
            })
    },
    [Actions.RECEIVE_ARTICLE_COMMENTS]: {
        next: (state, action) =>  Object.assign(
            {},
            state,
            {
                articleView: Object.assign(
                    {},
                    state.articleView,
                    {isFetchingComments: false})
            }),
        throw: (state, action) => Object.assign(
            {},
            state,
            {
                articleView: Object.assign(
                    {},
                    state.articleView,
                    {isFetchingComments: false})
            })
    }
};

const userInterface = handleActions(
    handlers,
    initialState
);


export {userInterface};