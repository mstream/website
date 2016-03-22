package io.mstream.website.routers;


import io.mstream.website.config.annotations.ApiRouter;
import io.mstream.website.config.annotations.MonitoringRouter;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

import javax.inject.Inject;
import javax.inject.Provider;

public class MainRouterProvider implements Provider<Router> {

    private final Router apiRouter;
    private final Router monitoringRouter;

    @Inject
    public MainRouterProvider(
            @ApiRouter Router apiRouter,
            @MonitoringRouter Router monitoringRouter) {
        this.apiRouter = apiRouter;
        this.monitoringRouter = monitoringRouter;
    }

    @Override
    public Router get() {
        Vertx vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        router.mountSubRouter(
                "/api",
                apiRouter);
        router.mountSubRouter(
                "/monitoring",
                monitoringRouter);
        return router;
    }
}
