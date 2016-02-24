import {convertArticlesPayload} from "../../actions/ArticlesPayloadConverter";

describe("ArticlesPayloadConverter", () => {
    describe("when converting articles payload", () => {
        const payloadArticle1 = {
            id: "1",
            title: "title1",
            summary: "summary1",
            content: "content1",
            dateCreated: "2016-01-01T10:00:00.000Z"
        };
        const payloadArticle2 = {
            id: "2",
            title: "title2",
            summary: "summary2",
            content: "content2",
            dateCreated: "2016-01-02T10:00:00.000Z"
        };
        const articlesPayload = [payloadArticle1, payloadArticle2];
        const convertedArticles = convertArticlesPayload(articlesPayload);
        it("it should covert articles dates properly", () => {
            expect(convertedArticles.length).toEqual(2);
            expect(convertedArticles[0].dateCreated).toEqual(new Date("2016-01-01T10:00:00.000Z"));
            expect(convertedArticles[1].dateCreated).toEqual(new Date("2016-01-02T10:00:00.000Z"));
        });
    });
});
