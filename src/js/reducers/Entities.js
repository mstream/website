import Immutable from "immutable";
import Actions from "../actions/Actions";


const initialState = {
    articles: Immutable.Map(),
    categories: Immutable.Map()
};

const entities = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.ADD_ARTICLE:
        {
            let articles = state.articles;
            articles = articles.set(
                action.id,
                action);
            return Object.assign(
                {},
                state,
                {articles: articles}
            );
        }
        case Actions.ADD_CATEGORY_TAG:
        {
            let categories = state.categories;
            categories = categories.set(
                action.name,
                action.name);
            return Object.assign(
                {},
                state,
                {categories: categories}
            );
        }
        default:
            return state;
    }
};

export default entities;