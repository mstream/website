import Immutable from "immutable";
import Actions from "../actions/Actions";


const initialState = {
    availableFilters: Immutable.OrderedSet(),
    enabledFilters: Immutable.OrderedSet(),
    articlesCategories: Immutable.Map(),
    articlesInCategoryCounter: Immutable.Map()
};

const categoryFilter = (state = initialState,
                        action = {}) => {
    switch (action.type) {
        case Actions.ADD_CATEGORY_TAG:
        {
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
        }
        case Actions.ENABLE_CATEGORY_FILTER:
        {
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
        }
        case Actions.DISABLE_CATEGORY_FILTER:
        {
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
        default:
            return state;
    }
};

export default categoryFilter;