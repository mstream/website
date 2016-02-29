import marked from "marked";
import cheerio from "cheerio";
import highlight from "highlight.js";


const convertToDisplay = (article) => {
    const markdownContent = article.content;
    const parsedContent = cheerio.load(marked(
        markdownContent, {
            sanitize: true,
            highlight: (code, lang) =>
                highlight.highlightAuto(code, [lang]).value
        }
    ));
    parsedContent("h2").each((i, el) => cheerio(el).wrap(`<section id="header${i}" class="section scrollspy"></section>`));
    const rawContent = {__html: parsedContent.html()};
    return Object.assign(
        {},
        article,
        {content: rawContent}
    );
};


export {convertToDisplay};