import {convertToDisplay} from "./../../../containers/article/ArticleDisplayConverter";
import cheerio from "cheerio";


describe("convertToHtml function", () => {
    it("should map article content to html properly", () => {
        const articleContent = `## Header 1
xxx
## Header 2
xxx`;
        const article = {content: articleContent};
        const contentHtml = cheerio.load(convertToDisplay(article).content.__html);
        const headersHtml = contentHtml("h2");
        expect(headersHtml.length).toEqual(2);
        expect(cheerio(headersHtml[0]).parent().attr("id")).toEqual("header0");
        expect(cheerio(headersHtml[0]).parent().attr("class")).toEqual("section scrollspy");
        expect(cheerio(headersHtml[1]).parent().attr("id")).toEqual("header1");
        expect(cheerio(headersHtml[1]).parent().attr("class")).toEqual("section scrollspy");
    });
});








