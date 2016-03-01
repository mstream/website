package io.mstream.website.routes;

import ratpack.func.Action;
import ratpack.handling.Chain;


public class ApiChain implements Action<Chain> {

    @Override
    public void execute(Chain chain) throws Exception {
        chain
                .prefix("articles", new ArticlesChain());
    }
}
