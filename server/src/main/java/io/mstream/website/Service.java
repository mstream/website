package io.mstream.website;

import com.google.inject.Inject;
import io.mstream.website.config.Config;
import io.mstream.website.config.annotations.MainRouter;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.AsyncResult;
import io.vertx.core.Future;
import io.vertx.core.Handler;
import io.vertx.core.http.HttpServer;
import io.vertx.core.logging.Logger;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.ext.web.Router;


public class Service extends AbstractVerticle {

    private static final Logger LOGGER = LoggerFactory.getLogger(Service.class);

    private final Config config;
    private final Router mainRouter;

    @Inject
    public Service(
            Config config,
            @MainRouter Router mainRouter) {
        this.config = config;
        this.mainRouter = mainRouter;
    }

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        HttpServer httpServer = vertx.createHttpServer();
        Handler<AsyncResult<HttpServer>> startHandler = result -> {
            if (result.succeeded()) {
                LOGGER.info(
                        "Listening on the port {}",
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
        LOGGER.info("http server has stopped");
        super.stop();
    }
}

