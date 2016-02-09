import Immutable from "immutable";
import Actions from "../Actions";


const initialState = Immutable.OrderedSet();


const articles = (state = initialState,
                  action = {}) => {
    switch (action.type) {
        case Actions.ADD_ARTICLE:
        {
            return state.add(action.id);
        }
        default:
            return state;
    }
};

export default articles;