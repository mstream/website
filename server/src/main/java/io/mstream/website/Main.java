package io.mstream.website;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import io.mstream.website.routes.RouteChain;
import ratpack.server.RatpackServer;

public class Main {

    public static void main(String[] args) throws Exception {
        RatpackServer.start(server ->
                server
                        .registryOf(registry ->
                                registry
                                        .add(
                                                ObjectMapper.class,
                                                new ObjectMapper()
                                                        .registerModule(new JavaTimeModule())
                                        )
                        )
                        .handlers(new RouteChain())
        );
    }

}

