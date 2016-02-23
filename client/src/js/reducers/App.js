import Immutable from "immutable";
import { combineReducers } from "redux";
import Actions from "../actions/Actions";
import entities from "./entities";
import articles from "./articles";
import categoryFilter from "./categoryFilter";
import userInterface from "./UserInterface";


const app = combineReducers({
    entities,
    articles,
    categoryFilter,
    userInterface
});


export default app;