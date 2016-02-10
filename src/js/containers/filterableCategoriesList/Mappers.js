import * as ActionCreators from "../../actions/ActionCreators";


const FilterMapperBuilder = (state) =>
    (name) => ({
        name: name,
        articlesNumber: state.categoryFilter.articlesInCategoryCounter.get(name)
    });


const mapStateToProps = (state) => {
    const filterMapper = FilterMapperBuilder(state);
    return {
        availableFilters: state.categoryFilter.availableFilters.toArray().map(filterMapper),
        enabledFilters: state.categoryFilter.enabledFilters.toArray().map(filterMapper)
    };
};

const mapDispatchToProps = (dispatch) => ({
    onDisabledCategoryClick: (name) => dispatch(ActionCreators.enableCategoryFilter(name)),
    onEnabledCategoryClick: (name) => dispatch(ActionCreators.disableCategoryFilter(name))
});

export {mapStateToProps, mapDispatchToProps};