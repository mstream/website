import { createAction } from "redux-actions";
import Actions from "./../../actions/Actions";
import articles from "../../reducers/articles";
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";
import Immutable from "immutable";


describe("Articles reducer", () => {

    const generatedId = "GENERATED_ID";
    const actionCreator = new ActionCreatorFactory(() => generatedId);

    describe("when articles state is initialized", () => {
        const initialState = articles(undefined, {});
        it("set should be empty", () => {
            expect(initialState.size).toEqual(0);
        });
    });
    describe("when a one articles is added", () => {
        const article = {
            id: "1",
            title: "title1",
            summary: "summary1",
            content: "content1",
            dateCreated: new Date(0)
        };
        const initialState = Immutable.OrderedSet();
        const state = articles(
            initialState,
            actionCreator.addArticle(article)
        );
        it("set should contain the created article", () => {
            expect(state.size).toEqual(1);
            expect(state.has(article.id)).toBeTruthy();
        });
    });
    describe("when a second articles is added", () => {
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
        const initialState = Immutable.OrderedSet.of(article1.id);
        const state = articles(
            initialState,
            actionCreator.addArticle(article2)
        );
        it("set should contain both articles", () => {
            expect(state.size).toEqual(2);
            expect(state.has(article1.id)).toBeTruthy();
            expect(state.has(article2.id)).toBeTruthy();
        });
    });
    describe("when articles are received", () => {
        const initialState = {
            items: Immutable.OrderedSet()
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
        const state = articles(
            initialState,
            createAction(Actions.RECEIVE_ARTICLES)(receivedArticles)
        );
        it("articles should be added to the articles list", () => {
            expect(state.size).toEqual(2);
            expect(state.has(article1.id)).toBeTruthy();
            expect(state.has(article2.id)).toBeTruthy();
        });
    });
    describe("when articles receive failed", () => {
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
        const initialState = Immutable.OrderedSet.of(
            article1.id,
            article2.id
        );
        const state = articles(
            initialState,
            createAction(Actions.RECEIVE_ARTICLES)(new Error())
        );
        it("article list should remain the same", () => {
            expect(state.size).toEqual(2);
            expect(state.has(article1.id)).toBeTruthy();
            expect(state.has(article2.id)).toBeTruthy();
        });
    });
});
