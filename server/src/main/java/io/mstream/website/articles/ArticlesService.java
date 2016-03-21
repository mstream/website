package io.mstream.website.articles;

import com.google.common.collect.Lists;
import com.google.common.collect.Sets;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;


public class ArticlesService {

    private final List<Article> articles;
    private final List<ArticleThumbnail> articleThumbnails;
    private final List<Comment> comments;


    public ArticlesService() {
        articles = Lists.newArrayList(
                new Article("1", "title1", "content1", Sets.newHashSet("xxx"), LocalDateTime.now()),
                new Article("2", "title2", "content2", Sets.newHashSet("yyy"), LocalDateTime.now()),
                new Article("3", "title3", "content3", Sets.newHashSet("zzz"), LocalDateTime.now())
        );

        articleThumbnails = articles
                .stream()
                .map(article -> new ArticleThumbnail(
                        article.getId(),
                        article.getTitle(),
                        article.getContent() + "_summary",
                        article.getCategories(),
                        article.getDateCreated()))
                .collect(Collectors.toList());

        comments = Lists.newArrayList(
                new Comment("1", "1", "xxx", "XXX", LocalDateTime.now()),
                new Comment("2", "1", "yyy", "YYY", LocalDateTime.now()),
                new Comment("3", "2", "zzz", "ZZZ", LocalDateTime.now())
        );
    }

    public List<ArticleThumbnail> getAll() {
        return articleThumbnails;
    }

    public Article get(String articleId) {
        return articles.stream()
                .filter(article -> article.getId().equals(articleId))
                .findAny()
                .get();
    }

    public List<Comment> getCommentsFor(String articleId) {
        return comments.stream()
                .filter(comment -> comment.getArticleId().equals(articleId))
                .collect(Collectors.toList());
    }
}