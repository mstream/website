package io.mstream.website.config;

import com.google.inject.AbstractModule;


public class ConfigModule extends AbstractModule {

    @Override
    protected void configure() {
        Config config = new Config(8080);
        bind(Config.class).toInstance(config);
    }
}
