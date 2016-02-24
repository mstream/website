import Immutable from "immutable";
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import sinon from "sinon"
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";
import Actions from "../../actions/Actions";


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Action Creators", () => {

    const generatedId = "GENERATED_ID";
    const urlBase = "http://example.com";
    const actionCreator = new ActionCreatorFactory(
        () => generatedId,
        url => `${urlBase}${url}`
    );

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
    describe("when fetching articles requested", () => {
        it("request and received action with a response should be dispatched", done => {
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
            const receivedArticles = [
                article1,
                article2
            ];
            const server = sinon.fakeServer.create();
            server.respondWith("GET", `${generatedId}/api/articles`, [
                200,
                {"Content-Type": "application/json"},
                JSON.stringify(receivedArticles)
            ]);
            const expectedActions = [
                {
                    type: Actions.REQUEST_ARTICLES,
                    payload: undefined
                },
                {
                    type: Actions.RECEIVE_ARTICLES,
                    payload: receivedArticles
                }
            ];
            const store = mockStore(null, expectedActions, done);
            store.dispatch(actionCreator.fetchArticles())
        })
    });
    describe("when fetching articles failed", () => {
        it("request and received action with an error should be dispatched", done => {
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
            const receivedArticles = [
                article1,
                article2
            ];
            const server = sinon.fakeServer.create();
            server.respondWith("GET", `${generatedId}/api/articles`, [
                500,
                {},
                ""
            ]);
            const expectedActions = [
                {
                    type: Actions.REQUEST_ARTICLES,
                    payload: undefined
                },
                {
                    type: Actions.RECEIVE_ARTICLES,
                    payload: receivedArticles
                }
            ];
            const store = mockStore(null, expectedActions, done);
            store.dispatch(actionCreator.fetchArticles())
        })
    });
    describe("when fetching article content requested", () => {
        it("request and received action with a response should be dispatched", done => {
            const articleWithoutContent = {
                id: "1",
                title: "title1",
                summary: "summary1",
                content: undefined,
                dateCreated: new Date(0)
            };
            const articleWithContent = Object.assign(
                {},
                articleWithoutContent,
                {content: "content"}
            );
            const server = sinon.fakeServer.create();
            server.respondWith("GET", `${generatedId}/api/articles/1`, [
                200,
                {"Content-Type": "application/json"},
                JSON.stringify(articleWithContent)
            ]);
            const expectedActions = [
                {
                    type: Actions.REQUEST_ARTICLE_CONTENT,
                    payload: undefined
                },
                {
                    type: Actions.RECEIVE_ARTICLE_CONTENT,
                    payload: articleWithContent
                }
            ];
            const store = mockStore(null, expectedActions, done);
            store.dispatch(actionCreator.fetchArticleContent(articleWithoutContent.id))
        })
    });
    describe("when fetching article content failed", () => {
        it("request and received action with an error should be dispatched", done => {
            const server = sinon.fakeServer.create();
            server.respondWith("GET", `${generatedId}/api/articles/1`, [
                500,
                {},
                ""
            ]);
            const expectedActions = [
                {
                    type: Actions.REQUEST_ARTICLES,
                    payload: undefined
                },
                {
                    type: Actions.RECEIVE_ARTICLES,
                    payload: undefined
                }
            ];
            const store = mockStore(null, expectedActions, done);
            store.dispatch(actionCreator.fetchArticles())
        })
    });
    describe("when fetching article comments requested", () => {
        it("request and received action with a response should be dispatched", done => {
            const articleId = "1";
            const comment1 = {
                id: "1",
                articleId: "1",
                content: "content1",
                author: "author1",
                dateCreated: new Date(0)
            };
            const comment2 = {
                id: "2",
                articleId: "1",
                title: "title1",
                author: "author1",
                dateCreated: new Date(0)
            };
            const receivedComments = [comment1, comment2];
            const server = sinon.fakeServer.create();
            server.respondWith("GET", `${generatedId}/api/articles/${articleId}/comments`, [
                200,
                {"Content-Type": "application/json"},
                JSON.stringify(receivedComments)
            ]);
            const expectedActions = [
                {
                    type: Actions.REQUEST_ARTICLE_COMMENTS,
                    payload: {articleId}
                },
                {
                    type: Actions.RECEIVE_ARTICLE_COMMENTS,
                    payload: receivedComments
                }
            ];
            const store = mockStore(null, expectedActions, done);
            store.dispatch(actionCreator.fetchArticleComments(articleId));
        })
    });
    describe("when fetching article comments failed", () => {
        it("request and received action with an error should be dispatched", done => {
            const articleId = "1";
            const server = sinon.fakeServer.create();
            server.respondWith("GET", `${generatedId}/api/articles/${articleId}/comments`, [
                500,
                {},
                ""
            ]);
            const expectedActions = [
                {
                    type: Actions.REQUEST_ARTICLE_COMMENTS,
                    payload: {articleId}
                },
                {
                    type: Actions.RECEIVE_ARTICLE_COMMENTS,
                    payload: undefined
                }
            ];
            const store = mockStore(null, expectedActions, done);
            store.dispatch(actionCreator.fetchArticleComments(articleId))
        })
    });
});
