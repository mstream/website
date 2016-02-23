import React, {PropTypes} from "react";
import ArticleThumbnail from "./ArticleThumbnail.jsx";


const ArticlesList = ({
    isLoading,
    articles,
    onReadMoreClick
    }) => {
    if (isLoading) {
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );
    }
    const articlesFragment = articles.map((article) => (
        <ArticleThumbnail
            key={article.id}
            onReadMoreClick={onReadMoreClick}
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