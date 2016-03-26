package io.mstream.website;

import com.google.inject.Guice;
import com.google.inject.Injector;
import io.mstream.website.config.MainModuleProvider;
import io.vertx.core.Vertx;
import io.vertx.core.logging.LoggerFactory;
import io.vertx.core.logging.SLF4JLogDelegateFactory;


public class Main {

    public static void main(String[] args) {
        System.setProperty(
                LoggerFactory.LOGGER_DELEGATE_FACTORY_CLASS_NAME,
                SLF4JLogDelegateFactory.class.getName());
        Injector injector = Guice.createInjector(
                new MainModuleProvider().get());
        Service service = injector.getInstance(Service.class);
        Vertx vertx = injector.getInstance(Vertx.class);
        vertx.deployVerticle(service);
    }
}
