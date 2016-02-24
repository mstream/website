import marked from "marked";
import {articleContentToHeadersMapper} from "./../../../components/headersList/ArticleContentToHeadersMapper";


describe("articleContentToHeadersMapper function", () => {
    it("should map article content to headers properly", () => {
        const articleContent = `## Header 1
xxx
## Header 2
xxx`;
        const headers = articleContentToHeadersMapper(articleContent);
        expect(headers.length).toBe(2);
        expect(headers[0]).toBe("Header 1");
        expect(headers[1]).toBe("Header 2");
    });
});








