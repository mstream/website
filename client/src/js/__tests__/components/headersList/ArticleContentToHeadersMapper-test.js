import marked from "marked";
import {articleContentToHeadersMapper} from "./../../../components/headersList/ArticleContentToHeadersMapper";


describe("articleContentToHeadersMapper function", () => {
    it("should map article content to headers properly", () => {
        const articleContent = `## Header 1
xxx
## Header 2
xxx`;
        const headers = articleContentToHeadersMapper(articleContent);
        expect(headers.length).toEqual(2);
        expect(headers[0]).toEqual("Header 1");
        expect(headers[1]).toEqual("Header 2");
    });
});








