import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk"
import Minilog from "minilog";
import app from "./reducers/App";
import actionCreator from "./actions/ActionCreator";
import * as ArticlesMock from "./mocks/ArticlesMock";

Minilog.enable();
var log = Minilog("app");

const logger = store => next => action => {
    log.debug("dispatching action: ", action);
    const result = next(action);
    log.debug("new state: ", store.getState());
    return result;
};

const store = createStore(
    app,
    applyMiddleware(
        thunkMiddleware,
        logger
    )
);


ArticlesMock.articles.forEach((article) => {
    store.dispatch(actionCreator.addArticle(article));
    article.categories.forEach((categoryName) => store.dispatch(actionCreator.addCategoryTag({name: categoryName})));
});

export default store;