package io.mstream.website.config;


import com.google.inject.AbstractModule;
import io.mstream.website.config.annotations.ApiRouter;
import io.mstream.website.config.annotations.ArticlesRouter;
import io.mstream.website.config.annotations.MainRouter;
import io.mstream.website.routers.ApiRouterProvider;
import io.mstream.website.routers.ArticlesRouterProvider;
import io.mstream.website.routers.MainRouterProvider;
import io.vertx.ext.web.Router;

public class RoutersModule extends AbstractModule {

    @Override
    protected void configure() {
        bind(Router.class)
                .annotatedWith(MainRouter.class)
                .toProvider(MainRouterProvider.class);
        bind(Router.class)
                .annotatedWith(ApiRouter.class)
                .toProvider(ApiRouterProvider.class);
        bind(Router.class)
                .annotatedWith(ArticlesRouter.class)
                .toProvider(ArticlesRouterProvider.class);
    }
}
