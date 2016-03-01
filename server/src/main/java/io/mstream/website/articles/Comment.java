package io.mstream.website.articles;

import lombok.Value;

import java.time.LocalDateTime;


@Value
public class Comment {
    String id;
    String articleId;
    String content;
    String author;
    LocalDateTime dateCreated;
}
