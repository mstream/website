package io.mstream.website;

import com.google.inject.Guice;
import io.mstream.website.config.MainModuleProvider;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.unit.TestContext;
import io.vertx.ext.unit.junit.VertxUnitRunner;
import lombok.val;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(VertxUnitRunner.class)
public class ServiceTest {

    private static final long TIMEOUT = 2000;

    private Vertx vertx;

    @Before
    public void setUp(TestContext context) throws Exception {
        val injector = Guice.createInjector(
                new MainModuleProvider().get());
        val service = injector.getInstance(Service.class);
        vertx = Vertx.vertx();
        vertx.deployVerticle(
                service,
                context.asyncAssertSuccess());
    }

    @After
    public void tearDown(TestContext context) throws Exception {
        vertx.close(context.asyncAssertSuccess());
    }

    @Test(timeout = TIMEOUT)
    public void servesArticlesThumbnails(TestContext context) {
        val async = context.async();
        val httpClient = vertx.createHttpClient();
        httpClient.getNow(8080, "localhost", "/api/articles", response ->
                response.handler(body -> {
                    JsonArray articlesJson = body.toJsonArray();
                    context.assertEquals(
                            3,
                            articlesJson.size());
                    async.complete();
                })
        );
    }

    @Test(timeout = TIMEOUT)
    public void servesArticles(TestContext context) {
        val async = context.async();
        val httpClient = vertx.createHttpClient();
        httpClient.getNow(8080, "localhost", "/api/articles/1", response ->
                response.handler(body -> {
                    JsonObject articleJson = body.toJsonObject();
                    context.assertEquals(
                            "1",
                            articleJson.getString("id"));
                    context.assertEquals(
                            "title1",
                            articleJson.getString("title"));
                    async.complete();
                })
        );
    }

    @Test(timeout = TIMEOUT)
    public void servesComments(TestContext context) {
        val async = context.async();
        val httpClient = vertx.createHttpClient();
        httpClient.getNow(8080, "localhost", "/api/articles/1/comments", response ->
                response.handler(body -> {
                    JsonArray commentsJson = body.toJsonArray();
                    context.assertEquals(
                            2,
                            commentsJson.size());
                    async.complete();
                })
        );
    }
}