package io.mstream.website;


import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.Vertx;

public class Service extends AbstractVerticle {

    public static void main(String[] args) {
        Vertx.vertx().deployVerticle(new Service());
    }

    @Override
    public void start(Future<Void> startFuture) throws Exception {
        vertx
                .createHttpServer()
                .requestHandler(request -> request.response().end("OK"))
                .listen(8080, result -> {
                    if (result.succeeded()) {
                        System.out.println("listening on port 8080");
                        startFuture.complete();
                    } else {
                        startFuture.fail(result.cause());
                    }
                });
    }

    @Override
    public void stop() throws Exception {
        System.out.println("http server stopped");
        super.stop();
    }
}

