package io.mstream.website;

import com.google.inject.Guice;
import com.google.inject.Inject;
import com.google.inject.Injector;
import io.mstream.website.config.Config;
import io.mstream.website.config.MainModuleProvider;
import io.mstream.website.config.annotations.MainRouter;
import io.vertx.core.*;
import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;


public class Service extends AbstractVerticle {

    private final Config config;
    private final Router mainRouter;

    @Inject
    public Service(
            Config config,
            @MainRouter Router mainRouter) {
        this.config = config;
        this.mainRouter = mainRouter;
    }

    public static void main(String[] args) {
        Injector injector = Guice.createInjector(
                new MainModuleProvider().get());
        Service service = injector.getInstance(Service.class);
        Vertx vertx = injector.getInstance(Vertx.class);
        vertx.deployVerticle(service);
    }

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        HttpServer httpServer = vertx.createHttpServer();
        Handler<AsyncResult<HttpServer>> startHandler = result -> {
            if (result.succeeded()) {
                System.out.printf(
                        "Listening on the port: %d\n",
                        config.getHttpPort());
                startFuture.complete();
            } else {
                startFuture.fail(result.cause());
            }
        };

        httpServer
                .requestHandler(mainRouter::accept)
                .listen(
                        config.getHttpPort(),
                        startHandler);
    }

    @Override
    public void stop() throws Exception {
        System.out.printf("http server has stopped\n");
        super.stop();
    }
}

