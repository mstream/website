import Immutable from "immutable";
import Actions from "../Actions";

const initialState = {

    availableCategoryFilters: Immutable.OrderedSet(),
    enabledCategoryFilters: Immutable.OrderedSet(),
    articlesInCategoryCounter: Immutable.Map(),

    entities: {
        categories: Immutable.Map()
    }
};

const app = (state = initialState, action = {}) => {
    switch (action.type) {
        case Actions.ADD_CATEGORY_TAG:
        {
            const {id, name} = action;
            const isCategoryNew = !state.entities.categories.has(id);

            let {articlesInCategoryCounter, availableCategoryFilters} = state;
            let categories = state.entities.categories;

            if (isCategoryNew) {
                const newCategory = {
                    id: id,
                    name: name
                };
                categories = categories.set(id, newCategory);
                articlesInCategoryCounter = articlesInCategoryCounter.set(
                    id,
                    1
                );
                availableCategoryFilters = availableCategoryFilters.add(id);
            } else {
                const currentQuantity = state.articlesInCategoryCounter.get(id);
                articlesInCategoryCounter = articlesInCategoryCounter.set(
                    id,
                    currentQuantity + 1
                );
            }
            const stateOverride = {
                availableCategoryFilters: availableCategoryFilters,
                articlesInCategoryCounter: articlesInCategoryCounter,
                entities: {
                    categories: categories
                }
            };
            return Object.assign({}, state, stateOverride);
        }
        case Actions.ENABLE_CATEGORY_FILTER:
        {
            const id = action.id;
            let {availableCategoryFilters, enabledCategoryFilters} = state;
            availableCategoryFilters = availableCategoryFilters.delete(id);
            enabledCategoryFilters = enabledCategoryFilters.add(id);
            const stateOverride = {
                availableCategoryFilters: availableCategoryFilters,
                enabledCategoryFilters: enabledCategoryFilters
            };
            return Object.assign({}, state, stateOverride);
        }
        case Actions.DISABLE_CATEGORY_FILTER:
        {
            const id = action.id;
            let {availableCategoryFilters, enabledCategoryFilters} = state;
            enabledCategoryFilters = enabledCategoryFilters.delete(id);
            availableCategoryFilters = availableCategoryFilters.add(id);
            const stateOverride = {
                availableCategoryFilters: availableCategoryFilters,
                enabledCategoryFilters: enabledCategoryFilters
            };
            return Object.assign({}, state, stateOverride);
        }
        default:
            return state;
    }
};

export default app;