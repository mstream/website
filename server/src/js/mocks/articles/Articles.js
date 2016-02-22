import fs from "fs";


const Articles = (() => {

    const articles = {};

    const articleDirs = fs.readdirSync(__dirname);

    for (let articleDir of articleDirs) {
        const dir = `${__dirname}/${articleDir}`;
        const stat = fs.statSync(dir);
        if (!stat.isDirectory()) {
            continue;
        }
        const article = JSON.parse(
            fs.readFileSync(
                `${dir}/article.json`,
                "utf-8"
            )
        );
        const articleContent = fs.readFileSync(`${dir}/content.md`, "utf-8");
        article.content = articleContent;
        articles[article.id] = article;
    }

    const getAll = () => {
        const articlesThumbnails = [];
        for (let articleId in articles) {
            const articleThumbnail = Object.assign({}, articles[articleId]);
            delete articleThumbnail.content;
            articlesThumbnails.push(articleThumbnail);
        }

        return articlesThumbnails;
    };

    const getById = (id) => {
        return articles[id];
    };

    return {
        getAll,
        getById
    }
})();


export default Articles;