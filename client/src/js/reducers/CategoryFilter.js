import Immutable from "immutable";
import Actions from "../actions/Actions";
import {handleActions} from "redux-actions";


const initialState = {
    availableFilters: Immutable.OrderedSet(),
    enabledFilters: Immutable.OrderedSet(),
    articlesInCategoryCounter: Immutable.Map()
};

const handlers = {
    [Actions.ADD_CATEGORY_TAG]: (state, action) => {
        let {articlesInCategoryCounter, availableFilters} = state;

        const currentQuantity =
            state.articlesInCategoryCounter.get(action.payload.name) || 0;

        articlesInCategoryCounter = articlesInCategoryCounter.set(
            action.payload.name,
            currentQuantity + 1
        );

        availableFilters = availableFilters.add(action.payload.name);
        return Object.assign(
            {},
            state,
            {
                availableFilters: availableFilters,
                articlesInCategoryCounter: articlesInCategoryCounter
            });
    },
    [Actions.RECEIVE_ARTICLES]: (state, action) => {
        let {articlesInCategoryCounter, availableFilters} = state;
        const articles = action.payload;
        const categoriesArrays = articles.map(article => article.categories);
        const categories = categoriesArrays.reduce(
            (previousCategory, currentCategory) =>
                previousCategory.concat(currentCategory),
            []);
        for (let category of categories) {
            const currentQuantity =
                articlesInCategoryCounter.get(category) || 0;
            articlesInCategoryCounter = articlesInCategoryCounter.set(
                category,
                currentQuantity + 1
            );
            availableFilters = availableFilters.add(category);
        }
        return Object.assign(
            {},
            state,
            {
                availableFilters: availableFilters,
                articlesInCategoryCounter: articlesInCategoryCounter
            });
    },
    [Actions.ENABLE_CATEGORY_FILTER]: (state, action) => {
        let {availableFilters, enabledFilters} = state;
        availableFilters = availableFilters.delete(action.payload.name);
        enabledFilters = enabledFilters.add(action.payload.name);
        return Object.assign(
            {},
            state, {
                availableFilters: availableFilters,
                enabledFilters: enabledFilters
            }
        );
    },
    [Actions.DISABLE_CATEGORY_FILTER]: (state, action) => {
        let {availableFilters, enabledFilters} = state;
        availableFilters = availableFilters.add(action.payload.name);
        enabledFilters = enabledFilters.delete(action.payload.name);
        return Object.assign(
            {},
            state, {
                availableFilters: availableFilters,
                enabledFilters: enabledFilters
            }
        );
    }
};

const categoryFilter = handleActions(
    handlers,
    initialState
);


export {categoryFilter};