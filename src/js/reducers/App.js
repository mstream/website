import Immutable from "immutable";
import { combineReducers } from 'redux'
import Actions from "../Actions";
import entities from "./entities";
import articles from "./articles";
import categoryFilter from "./categoryFilter";


const initialState = {
    articles: Immutable.OrderedSet(),
    categoryFilter: {
        availableFilters: Immutable.OrderedSet(),
        enabledFilters: Immutable.OrderedSet(),
        articlesInCategoryCounter: Immutable.Map()
    }
};



const app = combineReducers({
    entities,
    articles,
    categoryFilter
});

export default app;