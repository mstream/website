import articles from "../../reducers/articles";
import * as ActionCreators from "../../actions/ActionCreators";
import Immutable from "immutable";

describe("Articles reducer", () => {
    describe("when articles state is initialized", () => {
        const initialState = articles();
        it("set should be empty", () => {
            expect(initialState.size).toBe(0);
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
        const initialState = articles();
        const state = articles(
            initialState,
            ActionCreators.addArticle(
                article.title,
                article.summary,
                article.content,
                article.dateCreated,
                article.id
            )
        );
        it("set should contain the created article", () => {
            expect(state.size).toBe(1);
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
        const initialState = Immutable.Set.of(article1.id);
        const state = articles(
            initialState,
            ActionCreators.addArticle(
                article2.title,
                article2.summary,
                article2.content,
                article2.dateCreated,
                article2.id
            )
        );
        it("set should contain both articles", () => {
            expect(state.size).toBe(2);
            expect(state.has(article1.id)).toBeTruthy();
            expect(state.has(article2.id)).toBeTruthy();
        });
    });
});