package io.mstream.website.routers;


import io.mstream.website.articles.Article;
import io.mstream.website.articles.ArticleThumbnail;
import io.mstream.website.articles.ArticlesService;
import io.mstream.website.articles.Comment;
import io.vertx.core.Vertx;
import io.vertx.core.json.Json;
import io.vertx.ext.web.Router;

import javax.inject.Inject;
import javax.inject.Provider;
import java.util.List;

public class ArticlesRouterProvider implements Provider<Router> {

    private final Vertx vertx;
    private final ArticlesService articlesService;

    @Inject
    public ArticlesRouterProvider(Vertx vertx, ArticlesService articlesService) {
        this.vertx = vertx;
        this.articlesService = articlesService;
    }

    @Override
    public Router get() {
        Router router = Router.router(vertx);
        router.get("/").handler(context -> {
                    List<ArticleThumbnail> articles = articlesService.getAll();
                    context.response().end(Json.encode(articles));
                }
        );
        router.get("/:articleId").handler(context -> {
                    String articleId = context.request().getParam("articleId");
                    Article article = articlesService.get(articleId);
                    context.response().end(Json.encode(article));
                }
        );
        router.get("/:articleId/comments").handler(context -> {
                    String articleId = context.request().getParam("articleId");
                    List<Comment> comments = articlesService.getCommentsFor(
                            articleId);
                    context.response().end(Json.encode(comments));
                }
        );
        return router;
    }
}
