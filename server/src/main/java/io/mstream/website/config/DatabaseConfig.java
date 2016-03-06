package io.mstream.website.config;


import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class DatabaseConfig {

    private final List<String> seedNodes;

    @JsonCreator
    public DatabaseConfig(
            @JsonProperty("seed_nodes") List<String> seedNodes
    ) {
        this.seedNodes = seedNodes;
    }

    public List<String> getSeedNodes() {
        return seedNodes;
    }
}
