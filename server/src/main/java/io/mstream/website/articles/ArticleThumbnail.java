package io.mstream.website.articles;

import lombok.Value;

import java.time.LocalDateTime;
import java.util.Set;


@Value
public class ArticleThumbnail {
    String id;
    String title;
    String summary;
    Set<String> categories;
    LocalDateTime dateCreated;
}
