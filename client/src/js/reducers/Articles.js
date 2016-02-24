import Immutable from "immutable";
import Actions from "../actions/Actions";
import {handleActions} from "redux-actions";


const initialState = Immutable.OrderedSet();

const handlers = {
    [Actions.ADD_ARTICLE]: {
        next: (state, action) => state.add(action.payload.id)
    },
    [Actions.RECEIVE_ARTICLES]: {
        next: (state, action) =>  Immutable.OrderedSet(action.payload.map(article => article.id))
    }
};

const articles = handleActions(
    handlers,
    initialState
);


export default articles;