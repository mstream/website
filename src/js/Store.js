import { createStore } from "redux";
import app from "./reducers/App";
import * as ActionCreators from "./actions/ActionCreators";
import * as ArticlesMock from "./mocks/ArticlesMock";

const store = createStore(app);


ArticlesMock.articles.forEach((article) => {
    store.dispatch(ActionCreators.addArticle(
        article.title,
        article.summary,
        article.content,
        article.dateCreated,
        article.categories
    ));
    article.categories.forEach((categoryName) => store.dispatch(ActionCreators.addCategoryTag(categoryName)));
});

export default store;