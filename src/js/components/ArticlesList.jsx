import React, {PropTypes} from "react";
import ArticleThumbnail from "./ArticleThumbnail.jsx";

const ArticlesList = ({articles}) => {
    const articlesFragment = articles.map((article) => (
        <ArticleThumbnail
            key={article.id}
            {...article}
        />
    ));
    return (
        <ul className="list-unstyled list-group">{articlesFragment}</ul>
    );
};

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired
};

export default ArticlesList;