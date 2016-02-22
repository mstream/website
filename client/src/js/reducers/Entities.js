import Immutable from "immutable";
import Actions from "../actions/Actions";
import {createReducer} from "./ReducerBuilder";


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
            {articles: articles}
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
            {categories: categories}
        );
    }
};

const entities = createReducer(
    initialState,
    handlers
);


export default entities;