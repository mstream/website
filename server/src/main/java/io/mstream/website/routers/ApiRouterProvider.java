package io.mstream.website.routers;


import io.mstream.website.config.annotations.ArticlesRouter;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

import javax.inject.Inject;
import javax.inject.Provider;

public class ApiRouterProvider implements Provider<Router>{

    private final Router articlesRouter;

    @Inject
    public ApiRouterProvider(@ArticlesRouter  Router articlesRouter) {
        this.articlesRouter = articlesRouter;
    }

    @Override
    public Router get() {
        Vertx vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        router.mountSubRouter("/articles", articlesRouter);
        return router;
    }
}
