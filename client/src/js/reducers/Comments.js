import Immutable from "immutable";
import Actions from "../actions/Actions";
import {handleActions} from "redux-actions";


const initialState = Immutable.Map();

const handlers = {
    [Actions.RECEIVE_ARTICLE_COMMENTS]: {
        next: (state, action) => state.set(
            action.payload.articleId,
            Immutable.List(action.payload.comments.map(comment => comment.id))
        )
    }
};

const comments = handleActions(
    handlers,
    initialState
);


export {comments};