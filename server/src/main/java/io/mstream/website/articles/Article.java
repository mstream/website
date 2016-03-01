package io.mstream.website.articles;

import lombok.Value;

import java.time.LocalDateTime;
import java.util.Set;


@Value
public class Article {
    String id;
    String title;
    String content;
    Set<String> categories;
    LocalDateTime dateCreated;
}
