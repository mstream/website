package io.mstream.website.routes;

import io.mstream.website.articles.ArticlesService;
import ratpack.func.Action;
import ratpack.handling.Chain;
import ratpack.jackson.Jackson;


public class ArticlesChain implements Action<Chain> {

    private ArticlesService articlesService = new ArticlesService();

    @Override
    public void execute(Chain chain) throws Exception {
        chain
                .get(ctx ->
                        ctx.render(
                                Jackson.json(
                                        articlesService.getAll()
                                )
                        )
                )
                .get(":articleId", ctx ->
                        ctx.render(
                                Jackson.json(
                                        articlesService.get(
                                                ctx.getPathTokens().get("articleId")
                                        )
                                )
                        ))
                .get(":articleId/comments", ctx ->
                        ctx.render(
                                Jackson.json(

                                        articlesService.getCommentsFor(
                                                ctx.getPathTokens().get("articleId")
                                        )
                                )
                        )
                );

    }
}
