import express from "express";
import ArticlesMock from "../../../mocks/articles/Articles";
import CommentsMock from "../../../mocks/comments/Comments";


const router = express.Router();

router.get("/", (request, response) => {
    response.json(ArticlesMock.getAll());
});

router.get("/:articleId", (request, response) => {
    response.json(ArticlesMock.getById(request.params.articleId));
});

router.get("/:articleId/comments", (request, response) => {
    response.json(CommentsMock.getByArticleId(request.params.articleId));
});


export default router;