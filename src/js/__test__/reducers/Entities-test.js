import entities from "../../reducers/entities";
import * as ActionCreators from "../../actions/ActionCreators";


describe("Entities reducer", () => {
    describe("when entities state is initialized", () => {
        const initialState = entities();
        it("articles should be empty", () => {
            expect(initialState.articles.size).toBe(0);
        });
        it("categories should be empty", () => {
            expect(initialState.categories.size).toBe(0);
        });
    });
    describe("when entities article is added", () => {
        const initialState = entities();
        const article = {
            id: "1",
            title: "title1",
            summary: "summary1",
            content: "content1",
            dateCreated: new Date(0),
            categories: ["category1", "category2"]
        };
        const state = entities(initialState, ActionCreators.addArticle(
            article.title,
            article.summary,
            article.content,
            article.dateCreated,
            article.categories,
            article.id));
        it("all ", () => {
            expect(state.articles.size).toBe(1);
            expect(state.articles.get("1").id).toBe("1");
            expect(state.articles.get("1").title).toBe("title1");
            expect(state.articles.get("1").summary).toBe("summary1");
            expect(state.articles.get("1").content).toBe("content1");
            expect(state.articles.get("1").dateCreated).toEqual(new Date(0));
            expect(state.articles.get("1").categories).toEqual(["category1", "category2"]);

        });
    });
});
