package io.mstream.website.routers;

import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

import javax.inject.Provider;


public class MonitoringRouterProvider implements Provider<Router> {

    @Override
    public Router get() {
        Vertx vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        router.get("/up").handler(context -> {
            context.response().end();
        });
        return router;
    }
}
