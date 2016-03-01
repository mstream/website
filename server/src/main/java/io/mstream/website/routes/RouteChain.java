package io.mstream.website.routes;

import ratpack.func.Action;
import ratpack.handling.Chain;


public class RouteChain implements Action<Chain> {

    @Override
    public void execute(Chain chain) throws Exception {
        chain
                .prefix("api", new ApiChain());
    }
}
