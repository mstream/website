class Article {
    constructor(dateCreated, title, summary, content, categories = []) {
        this.dateCreated = dateCreated;
        this.title = title;
        this.summary = summary;
        this.content = content;
        this.categories = categories;
    }
}

const CATEGORIES_AMOUNT = 35;

const categories = ((amount) => {
    const generatedCategories = [];
    for (let i = 1; i <= amount; i++) {
        const id = i % 10 + 1;
        generatedCategories.push(`Category #${id}`);
    }
    return generatedCategories;
})(CATEGORIES_AMOUNT);

const summary = ((amount) => {
    const generatedSummary = [];
    for (let i = 1; i <= amount; i++) {
        generatedSummary.push(`summary${i}`);
    }
    return generatedSummary.join(" ");
})(150);

const content = ((amount) => {
    const generatedContent = [];
    for (let i = 1; i <= amount; i++) {
        generatedContent.push("Content content content\n```javascript\nvar xxx = 'xxx';\n```\n");
    }
    return generatedContent.join("\n");
})(5);

const articles = ((amount) => {
    const generatedArticles = [];
    for (let i = 1; i <= amount; i++) {
        generatedArticles.push(new Article(new Date(0), `Article #${i}`, summary, content, [categories[i % CATEGORIES_AMOUNT]]));
    }
    return generatedArticles;
})(100);

export {articles};