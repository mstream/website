package io.mstream.website.routers;

import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

import javax.inject.Inject;
import javax.inject.Provider;


public class MonitoringRouterProvider implements Provider<Router> {

    private final Vertx vertx;

    @Inject
    public MonitoringRouterProvider(Vertx vertx) {
        this.vertx = vertx;
    }

    @Override
    public Router get() {
        Router router = Router.router(vertx);
        router.get("/up").handler(context -> context.response().end());
        return router;
    }
}
