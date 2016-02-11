import * as ActionCreators from "../../actions/ActionCreators";

const ArticleFilterBuilder = enabledFilters => article => {
    for (let filter of enabledFilters) {
        if (article.categories.indexOf(filter) !== -1) {
            return true;
        }
    }
    return false;
};

const ArticleMapperBuilder = state => id => state.entities.articles.get(id);

const mapStateToProps = (state) => {
    const articleMapper = ArticleMapperBuilder(state);
    let articles = state.articles.toArray().map(articleMapper);
    const enabledFilters = state.categoryFilter.enabledFilters;
    if (!enabledFilters.isEmpty()) {
        const articleFilter = ArticleFilterBuilder(enabledFilters);
        articles = articles.filter(articleFilter);
    }
    return {
        articles: articles
    };
};

const mapDispatchToProps = (dispatch) => ({

});

export {mapStateToProps, mapDispatchToProps};