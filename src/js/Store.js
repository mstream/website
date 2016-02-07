import { createStore } from "redux";
import app from "./reducers/App";
import * as ActionCreators from "./ActionCreators";
import * as CategoriesMock from "./mocks/CategoriesMock";

const store = createStore(app);

CategoriesMock.categories.forEach((category) => store.dispatch(ActionCreators.addCategoryTag(
    category.id,
    category.name
)));

export default store;