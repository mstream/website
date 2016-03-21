package io.mstream.website.routers;


import io.mstream.website.config.annotations.ApiRouter;
import io.mstream.website.config.annotations.ArticlesRouter;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;
import lombok.val;

import javax.inject.Inject;
import javax.inject.Provider;

public class MainRouterProvider implements Provider<Router>{

    private final Router apiRouter;

    @Inject
    public MainRouterProvider(@ApiRouter Router apiRouter) {
        this.apiRouter = apiRouter;
    }

    @Override
    public Router get() {
        Vertx vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        router.mountSubRouter(
                "/api",
                apiRouter);
        return router;
    }
}
