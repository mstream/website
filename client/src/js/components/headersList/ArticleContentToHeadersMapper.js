import marked from "marked";
import cheerio from "cheerio";


const articleContentToHeadersMapper = (content) => {
    const parsedContent = cheerio.load(
        marked(
            content,
            {sanitize: true}
        )
    );
    const headers = [];
    parsedContent("h2").each((i, el) => headers.push(cheerio(el).text()));
    return headers;
};


export {articleContentToHeadersMapper};