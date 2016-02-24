import actionCreator from "../../actions/ActionCreator";
import IdToEntityMapperBuilder from "../IdToEntityMapperBuilder";
import * as ActionCreators from "../../actions/ActionCreatorFactory";


const ArticleFilterBuilder = enabledFilters => article => {
    for (let filter of enabledFilters) {
        if (article.categories.indexOf(filter) !== -1) {
            return true;
        }
    }
    return false;
};

const mapStateToProps = state => {
    const idToArticle = IdToEntityMapperBuilder(state, "articles");
    let articles = state.articles.map(idToArticle).toArray();
    const enabledFilters = state.categoryFilter.enabledFilters;
    if (!enabledFilters.isEmpty()) {
        const articleFilter = ArticleFilterBuilder(enabledFilters);
        articles = articles.filter(articleFilter);
    }
    return {
        isLoading: state.userInterface.articlesList.isFetching,
        articles: articles
    };
};

const mapDispatchToProps = dispatch => ({
    onReadMoreClick: articleId => {
        dispatch(actionCreator.fetchArticleContent(articleId));
        dispatch(actionCreator.fetchArticleComments(articleId));
    }
});


export {mapStateToProps, mapDispatchToProps};