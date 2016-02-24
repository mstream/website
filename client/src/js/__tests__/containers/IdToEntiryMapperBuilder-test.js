import IdToEntityMapperBuilder from "../../containers/IdToEntityMapperBuilder";
import Immutable from "immutable";


describe("IdToEntityMapperBuilder", () => {
    it("should map state to props properly", () => {
        const articleId = "1";
        const state = {
            entities: {
                articles: Immutable.Map({
                    [articleId]: {
                        id: "1",
                        dateCreated: new Date(0),
                        title: "title1",
                        summary: "summary1",
                        content: "content1",
                        categories: ["category1"]
                    }
                })
            }
        };
        const idToArticle = IdToEntityMapperBuilder(state, "articles");
        const article = idToArticle(articleId);
        expect(article.id).toEqual(articleId);
        expect(article.dateCreated).toEqual(new Date(0));
        expect(article.title).toEqual("title1");
        expect(article.summary).toEqual("summary1");
        expect(article.content).toEqual("content1");
        expect(article.categories).toEqual(["category1"]);
    });
});

