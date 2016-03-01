package io.mstream.website.articles;


import com.google.common.collect.Lists;
import com.google.common.collect.Sets;
import lombok.val;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

public class ArticlesService {

    Map<String, Article> articles;
    List<ArticleThumbnail> articleThumbnails;
    List<Comment> comments;


    public ArticlesService() {
        init();
    }

    private void init() {
        val articles = Lists.newArrayList(
                new Article("1", "title1", "content1", Sets.newHashSet("xxx"), LocalDateTime.now()),
                new Article("2", "title2", "content2", Sets.newHashSet("yyy"), LocalDateTime.now()),
                new Article("3", "title3", "content3", Sets.newHashSet("zzz"), LocalDateTime.now())
        );

        this.articles = articles
                .stream()
                .collect(
                        Collectors.toMap(
                                article -> article.getId(),
                                Function.identity()
                        ));

        articleThumbnails = articles
                .stream()
                .map(article -> new ArticleThumbnail(
                        article.getId(),
                        article.getTitle(),
                        article.getContent() + "_summary",
                        article.getCategories(),
                        article.getDateCreated()
                ))
                .collect(Collectors.toList());

        comments = Lists.newArrayList(
                new Comment("1", "1", "xxx", "XXX", LocalDateTime.now()),
                new Comment("2", "1", "yyy", "YYY", LocalDateTime.now())
        );

    }

    public List<ArticleThumbnail> getAll() {
        return articleThumbnails;
    }

    public Article get(String id) {
        return articles.get(id);
    }

    public List<Comment> getCommentsFor(String id) {
        return comments;
    }
}
