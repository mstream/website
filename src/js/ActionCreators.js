import Actions from "./Actions";

const addCategoryTag = (id, name) => ({
    type: Actions.ADD_CATEGORY_TAG,
    id: id,
    name: name
});

const enableCategoryFilter = (id) => ({
    type: Actions.ENABLE_CATEGORY_FILTER,
    id: id
});

const disableCategoryFilter = (id) => ({
    type: Actions.DISABLE_CATEGORY_FILTER,
    id: id
});

export {addCategoryTag, enableCategoryFilter, disableCategoryFilter};