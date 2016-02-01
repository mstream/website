class Post {
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

const posts = ((amount) => {
    const generatedPosts = [];
    for (let i = 1; i <= amount; i++) {
        generatedPosts.push(new Post(i, `Post #${i}`, summary, new Date()));
    }
    return generatedPosts;
})(100);

export {posts};