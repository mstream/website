import Immutable from "immutable";
import Actions from "../actions/Actions";
import {handleActions} from "redux-actions";


const initialState = {
    articlesList: {
        isFetching: false
    },
    articleView: {
        isFetching: false
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
                    {isFetching: true}
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
                    {isFetching: false})
            }),
        throw: (state, action) => Object.assign(
            {},
            state,
            {
                articleView: Object.assign(
                    {},
                    state.articleView,
                    {isFetching: false})
            })
    }
};

const userInterface = handleActions(
    handlers,
    initialState
);


export default userInterface;