import Immutable from "immutable";
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";
import Actions from "../../actions/Actions";


describe("Action Creators", () => {

    const generatedId = "GENERATED_ID";
    const actionCreator = new ActionCreatorFactory(() => generatedId);
    
    describe("when creating add article action with article id", () => {
        const id = "1";
        const title = "title";
        const dateCreated = new Date(0);
        const summary = "summary";
        const content = "content";
        const categories = Immutable.Set.of("category1", "category2");
        const addCategoryTagAction = actionCreator.addArticle({
            id,
            title,
            dateCreated,
            summary,
            content,
            categories
        });
        it("it should have a proper type and name set", () => {
            expect(addCategoryTagAction).toEqual({
                type: Actions.ADD_ARTICLE,
                payload: {
                    id,
                    title,
                    dateCreated,
                    summary,
                    content,
                    categories
                }
            });
        });
    });
    describe("when creating add article action without article id", () => {
        const title = "title";
        const dateCreated = new Date(0);
        const summary = "summary";
        const content = "content";
        const categories = Immutable.Set.of("category1", "category2");
        const addCategoryTagAction = actionCreator.addArticle({
            title,
            dateCreated,
            summary,
            content,
            categories
        });
        it("it should have a proper type and name set", () => {
            expect(addCategoryTagAction).toEqual({
                type: Actions.ADD_ARTICLE,
                payload: {
                    id: generatedId,
                    title,
                    dateCreated,
                    summary,
                    content,
                    categories
                }
            });
        });
    });
    describe("when creating add category tag action", () => {
        const categoryName = "category";
        const articleId = "article1";
        const addCategoryTagAction = actionCreator.addCategoryTag({
            categoryName,
            articleId
        });
        it("it should have a proper type and name set", () => {
            expect(addCategoryTagAction).toEqual({
                type: Actions.ADD_CATEGORY_TAG,
                payload: {
                    categoryName,
                    articleId
                }
            });
        });
    });
});
