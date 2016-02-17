import { createAction } from 'redux-actions';
import Actions from "./Actions";

class ActionCreatorFactory {

    constructor(idGenerator) {

        const idSupplier = (payload) => payload.id ? payload : Object.assign(
            {},
            {id: idGenerator()},
            payload
        );

        this.addArticle = createAction(Actions.ADD_ARTICLE, idSupplier);
        this.addCategoryTag = createAction(Actions.ADD_CATEGORY_TAG);
        this.enableCategoryFilter = createAction(Actions.ENABLE_CATEGORY_FILTER);
        this.disableCategoryFilter = createAction(Actions.DISABLE_CATEGORY_FILTER);
    }
}

export default ActionCreatorFactory;