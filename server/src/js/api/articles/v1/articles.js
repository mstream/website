import express from "express";
import ArticlesMock from "../../../mocks/articles/Articles";

const router = express.Router();

router.get("/", (request, response) => {
    response.json(ArticlesMock.getAll());
});

router.get("/:articleId", (request, response) => {
    response.json(ArticlesMock.getById(request.params.articleId));
});


export default router;