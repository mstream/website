import Immutable from "immutable";
import Actions from "../actions/Actions";
import {createReducer} from "./ReducerBuilder";


const initialState = Immutable.OrderedSet();

const handlers = {
    [Actions.ADD_ARTICLE]: (state, action) => state.add(action.id)
};

const articles = createReducer(
    initialState,
    handlers
);


export default articles;