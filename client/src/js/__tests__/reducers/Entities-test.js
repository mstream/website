import { createAction } from "redux-actions";
import Actions from "./../../actions/Actions";
import Immutable from "immutable";
import {entities} from "../../reducers/Entities";
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";


describe("Entities reducer", () => {

    const generatedId = "GENERATED_ID";
    const actionCreator = new ActionCreatorFactory(() => generatedId);

    describe("when entities state is initialized", () => {
        const initialState = entities(undefined, {});
        it("articles should be empty", () => {
            expect(initialState.articles.size).toEqual(0);
        });
        it("categories should be empty", () => {
            expect(initialState.categories.size).toEqual(0);
        });
    });
    describe("when entities article is added", () => {
        const initialState = {
            articles: Immutable.Map()
        };
        const article = {
            id: "1",
            title: "title1",
            summary: "summary1",
            content: "content1",
            dateCreated: new Date(0),
            categories: ["category1", "category2"]
        };
        const state = entities(initialState, actionCreator.addArticle(article));
        it("all its properties should be retained", () => {
            expect(state.articles.size).toEqual(1);
            expect(state.articles.get("1").id).toEqual("1");
            expect(state.articles.get("1").title).toEqual("title1");
            expect(state.articles.get("1").summary).toEqual("summary1");
            expect(state.articles.get("1").content).toEqual("content1");
            expect(state.articles.get("1").dateCreated).toEqual(new Date(0));
            expect(state.articles.get("1").categories).toEqual(["category1", "category2"]);

        });
    });
    describe("when articles are received", () => {
        const initialState = {
            articles: Immutable.Map()
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
        const state = entities(
            initialState,
            createAction(Actions.RECEIVE_ARTICLES)(receivedArticles)
        );
        it("articles should be added to the articles list", () => {
            expect(state.articles.size).toEqual(2);
            expect(state.articles.get(article1.id).id).toEqual(article1.id);
            expect(state.articles.get(article2.id).id).toEqual(article2.id);
        });
    });
    describe("when article content is received", () => {
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
        const initialState = {
            articles: Immutable.Map({
                    [articleWithoutContent.id]: articleWithoutContent
                }
            )
        };
        const state = entities(
            initialState,
            createAction(Actions.RECEIVE_ARTICLE_CONTENT)(articleWithContent)
        );
        it("content should be added to the existing article", () => {
            expect(state.articles.size).toEqual(1);
            expect(state.articles.get(articleWithoutContent.id).id).toEqual(articleWithoutContent.id);
            expect(state.articles.get(articleWithoutContent.id).content).toEqual(articleWithContent.content);
        });
    });
    describe("when article comments are received", () => {
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
        const initialState = {
            comments: Immutable.Map()
        };
        const state = entities(
            initialState,
            createAction(Actions.RECEIVE_ARTICLE_COMMENTS)({
                articleId,
                comments: receivedComments
            })
        );
        it("comments should be added to the comments list", () => {
            expect(state.comments.size).toEqual(2);
            expect(state.comments.get(comment1.id).id).toEqual(comment1.id);
            expect(state.comments.get(comment2.id).id).toEqual(comment2.id);
        });
    });
});
