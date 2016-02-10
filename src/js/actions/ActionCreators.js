import Actions from "./Actions";
import uuid from "uuid";

const addArticle = (title, summary, content, dateCreated, id = uuid.v4())  => {
    return Object.assign(
        {},
        {type: Actions.ADD_ARTICLE},
        {id, dateCreated, title, summary, content}
    );
};

const addCategoryTag = (name) => Object.assign({
    type: Actions.ADD_CATEGORY_TAG,
    name: name
});

const enableCategoryFilter = (name) => ({
    type: Actions.ENABLE_CATEGORY_FILTER,
    name: name
});

const disableCategoryFilter = (name) => ({
    type: Actions.DISABLE_CATEGORY_FILTER,
    name: name
});

export {addArticle, addCategoryTag, enableCategoryFilter, disableCategoryFilter};