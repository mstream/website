package io.mstream.website;


import com.google.inject.Guice;
import com.google.inject.Inject;
import com.google.inject.Injector;
import io.mstream.website.config.MainModuleProvider;
import io.mstream.website.config.annotations.MainRouter;
import io.vertx.core.*;
import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;

public class Service extends AbstractVerticle {

    private final Router mainRouter;

    @Inject
    public Service(@MainRouter Router mainRouter) {
        this.mainRouter = mainRouter;
    }

    public static void main(String[] args) {
        Injector injector = Guice.createInjector(
                new MainModuleProvider().get());
        Service service = injector.getInstance(Service.class);
        Vertx.vertx().deployVerticle(service);
    }

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        HttpServer httpServer = vertx.createHttpServer();
        Handler<AsyncResult<HttpServer>> startHandler = result -> {
            if (result.succeeded()) {
                System.out.println("listening on port 8080");
                startFuture.complete();
            } else {
                startFuture.fail(result.cause());
            }
        };

        httpServer
                .requestHandler(mainRouter::accept)
                .listen(
                        8080,
                        startHandler);
    }

    @Override
    public void stop() throws Exception {
        System.out.println("http server has stopped");
        super.stop();
    }
}

