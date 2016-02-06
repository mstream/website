class Article {
    constructor(id, title, summary, dateCreated) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.dateCreated = dateCreated;
    }
}

const summary = ((amount) => {
    const generatedSummary = [];
    for (let i = 1; i <= amount; i++) {
        generatedSummary.push("summary");
    }
    return generatedSummary.join(" ");
})(50);

const articles = ((amount) => {
    const generatedArticles = [];
    for (let i = 1; i <= amount; i++) {
        generatedArticles.push(new Article(i, `Article #${i}`, summary, new Date()));
    }
    return generatedArticles;
})(100);

export {articles};