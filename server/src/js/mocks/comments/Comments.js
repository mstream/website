import fs from "fs";


const Comments = (() => {

    const comments = {};

    const commentsDirs = fs.readdirSync(__dirname);

    for (let commentsDir of commentsDirs) {
        const articleComments = [];
        const dir = `${__dirname}/${commentsDir}`;
        const stat = fs.statSync(dir);
        if (!stat.isDirectory()) {
            continue;
        }
        const commentFiles = fs.readdirSync(dir);

        for (let commentFile of commentFiles) {
            const comment = JSON.parse(
                fs.readFileSync(
                    `${dir}/${commentFile}`,
                    "utf-8"
                )
            );
            comment.dateCreated = new Date();
            articleComments.push(comment);
        }
        if (articleComments.length) {
            comments[articleComments[0].articleId] = articleComments;
        }
    }

    const getByArticleId = (id) => {
        return comments[id];
    };

    return {
        getByArticleId
    }
})();


export default Comments;