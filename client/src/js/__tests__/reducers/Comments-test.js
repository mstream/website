import { createAction } from "redux-actions";
import Actions from "./../../actions/Actions";
import comments from "../../reducers/comments";
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";
import Immutable from "immutable";


describe("Comments reducer", () => {

    describe("when comments state is initialized", () => {
        const initialState = comments(undefined, {});
        it("map should be empty", () => {
            expect(initialState.size).toEqual(0);
        });
    });

    describe("when article comments are received", () => {
        const articleId = "1";
        const comment1 = {
            id: "1",
            articleId: "1",
            author: "author1",
            content: "content1",
            dateCreated: new Date(0)
        };
        const comment2 = {
            id: "2",
            articleId: "1",
            author: "author2",
            content: "content2",
            dateCreated: new Date(0)
        };
        const receivedComments = [comment1, comment2];
        const initialState = Immutable.Map();
        const state = comments(
            initialState,
            createAction(Actions.RECEIVE_ARTICLE_COMMENTS)({
                articleId,
                comments: receivedComments
            })
        );
        it("set should contain the created article", () => {
            expect(state.size).toEqual(1);
            expect(state.get(articleId).size).toEqual(2);
            expect(state.get(articleId).get(0)).toEqual(comment1.id);
            expect(state.get(articleId).get(1)).toEqual(comment2.id);
        });
    });
});
