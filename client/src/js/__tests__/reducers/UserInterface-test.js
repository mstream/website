import { createAction } from "redux-actions";
import Actions from "./../../actions/Actions";
import userInterface from "../../reducers/UserInterface";
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";
import Immutable from "immutable";


describe("UserInterface reducer", () => {

    describe("when articles state is initialized", () => {
        const initialState = userInterface(undefined, {});
        it("set should be empty", () => {
            expect(initialState.articlesList.isFetching).toBeFalsy();
            expect(initialState.articleView.isFetching).toBeFalsy();
        });
    });
    describe("when articles are requested", () => {
        const initialState = {
            articlesList: {
                isFetching: false
            }
        };
        const state = userInterface(
            initialState,
            createAction(Actions.REQUEST_ARTICLES)()
        );
        it("ui isFetching property should be set to true", () => {
            expect(state.articlesList.isFetching).toBeTruthy();
        });
    });
    describe("when articles are received", () => {
        const initialState = {
            articlesList: {
                isFetching: true
            }
        };
        const article1 = {
            id: "1",
            title: "title1",
            summary: "summary1",
            content: "content1",
            dateCreated: new Date(0)
        };
        const article2 = {
            id: "2",
            title: "title2",
            summary: "summary2",
            content: "content2",
            dateCreated: new Date(0)
        };
        const receivedArticles = [article1, article2];
        const state = userInterface(
            initialState,
            createAction(Actions.RECEIVE_ARTICLES)(receivedArticles)
        );
        it("ui isFetching property should be set to false", () => {
            expect(state.articlesList.isFetching).toBeFalsy();
        });
    });
    describe("when articles receive failed", () => {
        const initialState = {
            articleView: {
                isFetching: true
            }
        };
        const state = userInterface(
            initialState,
            createAction(Actions.RECEIVE_ARTICLES)(new Error())
        );
        it("ui isFetching property should be set to false", () => {
            expect(state.articlesList.isFetching).toBeFalsy();
        });
    });
    describe("when article content is received", () => {
        const initialState = {
            articleView: {
                isFetching: true
            }
        };
        const article = {
            id: "1",
            title: "title1",
            summary: "summary1",
            content: "content1",
            dateCreated: new Date(0)
        };
        const state = userInterface(
            initialState,
            createAction(Actions.RECEIVE_ARTICLE_CONTENT)(article)
        );
        it("ui isFetching property should be set to false", () => {
            expect(state.articleView.isFetching).toBeFalsy();
        });
    });
    describe("when article content receive failed", () => {
        const initialState = {
            articlesList: {
                isFetching: true
            }
        };
        const state = userInterface(
            initialState,
            createAction(Actions.RECEIVE_ARTICLE_CONTENT)(new Error())
        );
        it("ui isFetching property should be set to false", () => {
            expect(state.articleView.isFetching).toBeFalsy();
        });
    });
});
