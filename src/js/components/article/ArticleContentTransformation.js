import marked from "marked";
import cheerio from "cheerio";
import highlight from "highlight.js";


const articleContentTransformation = (content) => {
    const parsedContent = cheerio.load(marked(
        content, {
            sanitize: true,
            highlight: (code, lang) =>
                highlight.highlightAuto(code, [lang]).value
        }
    ));
    parsedContent("h2").each((i, el) => cheerio(el).wrap(`<section id="header${i}" class="section scrollspy"></section>`));
    return parsedContent.html();
};


export {articleContentTransformation};