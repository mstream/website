package io.mstream.website;

import io.vertx.core.Vertx;
import io.vertx.ext.unit.Async;
import io.vertx.ext.unit.TestContext;
import io.vertx.ext.unit.junit.VertxUnitRunner;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(VertxUnitRunner.class)
public class ServiceTest {

    private Vertx vertx;

    @Before
    public void setUp(TestContext context) throws Exception {
        vertx = Vertx.vertx();
        vertx.deployVerticle(
                Service.class.getName(),
                context.asyncAssertSuccess());
    }

    @After
    public void tearDown(TestContext context) throws Exception {
        vertx.close(context.asyncAssertSuccess());
    }

    @Test
    public void test(TestContext context) throws InterruptedException {
        Async async = context.async();
        vertx.createHttpClient().getNow(8080, "localhost", "/api", response ->
                response.handler(body -> {
                    context.assertTrue(body.toString().contains("OK"));
                    async.complete();
                })
        );
    }
}