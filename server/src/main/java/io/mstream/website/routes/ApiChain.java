package io.mstream.website.routes;

import io.mstream.website.config.DatabaseConfig;
import ratpack.func.Action;
import ratpack.handling.Chain;
import ratpack.jackson.Jackson;


public class ApiChain implements Action<Chain> {

    @Override
    public void execute(Chain chain) throws Exception {
        chain
                .prefix("config", new ConfigChain())
                .prefix("articles", new ArticlesChain());
    }
}
