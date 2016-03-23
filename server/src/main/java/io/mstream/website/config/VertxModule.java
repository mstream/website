package io.mstream.website.config;

import com.google.inject.AbstractModule;
import io.vertx.core.Vertx;


public class VertxModule extends AbstractModule {

    @Override
    protected void configure() {
        bind(Vertx.class).toInstance(Vertx.vertx());
    }
}
