import * as ActionCreators from "../../actions/ActionCreators";
import Actions from "../../actions/Actions";


describe("Action Creators", () => {
    describe("when creating add category tag action", () => {
        const categoryName = "category1";
        const articleId = "aritcle1";
        const addCategoryTagAction = ActionCreators.addCategoryTag(categoryName, articleId);
        it("it should have a proper type and name set", () => {
            expect(addCategoryTagAction).toEqual({
                type: Actions.ADD_CATEGORY_TAG,
                name: categoryName,
                articleId: articleId
            });
        });
    });
});
