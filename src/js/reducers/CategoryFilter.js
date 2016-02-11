import Immutable from "immutable";
import Actions from "../actions/Actions";
import {createReducer} from "./ReducerBuilder";


const initialState = {
    availableFilters: Immutable.OrderedSet(),
    enabledFilters: Immutable.OrderedSet(),
    articlesCategories: Immutable.Map(),
    articlesInCategoryCounter: Immutable.Map()
};

const handlers = {
    [Actions.ADD_CATEGORY_TAG]: (state, action) => {
        let {articlesCategories, articlesInCategoryCounter, availableFilters} = state;

        const currentCategories =
            articlesCategories.get(action.articleId) || Immutable.OrderedSet();

        articlesCategories = articlesCategories.set(
            action.articleId,
            currentCategories.add(action.name)
        );

        const currentQuantity =
            state.articlesInCategoryCounter.get(action.name) || 0;

        articlesInCategoryCounter = articlesInCategoryCounter.set(
            action.name,
            currentQuantity + 1
        );

        availableFilters = availableFilters.add(action.name);
        return Object.assign(
            {},
            state,
            {
                availableFilters: availableFilters,
                articlesCategories: articlesCategories,
                articlesInCategoryCounter: articlesInCategoryCounter
            });
    },
    [Actions.ENABLE_CATEGORY_FILTER]: (state, action) => {
        let {availableFilters, enabledFilters} = state;
        availableFilters = availableFilters.delete(action.name);
        enabledFilters = enabledFilters.add(action.name);
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
        availableFilters = availableFilters.add(action.name);
        enabledFilters = enabledFilters.delete(action.name);
        return Object.assign(
            {},
            state, {
                availableFilters: availableFilters,
                enabledFilters: enabledFilters
            }
        );
    }
};

const categoryFilter = createReducer(
    initialState,
    handlers
);


export default categoryFilter;