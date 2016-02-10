import { createStore } from "redux";
import app from "./reducers/App";
import * as ActionCreators from "./actions/ActionCreators";
import * as ArticlesMock from "./mocks/ArticlesMock";
import * as CategoriesMock from "./mocks/CategoriesMock";

const store = createStore(app);

CategoriesMock.categories.forEach((categoryName) => store.dispatch(ActionCreators.addCategoryTag(categoryName)));

ArticlesMock.articles.forEach((article) => store.dispatch(ActionCreators.addArticle(
    article.title,
    article.summary,
    article.content,
    article.dateCreated
)));

export default store;