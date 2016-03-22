package io.mstream.website.config;


public class Config {

    private final int httpPort;

    public Config(int httpPort) {
        this.httpPort = httpPort;
    }

    public int getHttpPort() {
        return httpPort;
    }
}
