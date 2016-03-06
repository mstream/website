import Immutable from "immutable";
import { combineReducers } from "redux";
import Actions from "../actions/Actions";
import {entities} from "./Entities";
import {articles} from "./Articles";
import {comments} from "./Comments";
import {categoryFilter} from "./CategoryFilter";
import {userInterface} from "./UserInterface";


const app = combineReducers({
    entities,
    articles,
    comments,
    categoryFilter,
    userInterface
});


export {app};