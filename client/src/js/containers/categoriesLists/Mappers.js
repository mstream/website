import actionCreator from "../../actions/ActionCreator";


const FilterMapperBuilder = (state) =>
    (name) => ({
        name: name,
        articlesNumber: state.categoryFilter.articlesInCategoryCounter.get(name)
    });


const mapStateToProps = (state) => {
    const filterMapper = FilterMapperBuilder(state);
    return {
        availableFilters: state.categoryFilter.availableFilters.map(filterMapper).toArray(),
        enabledFilters: state.categoryFilter.enabledFilters.map(filterMapper).toArray()
    };
};

const mapDispatchToProps = (dispatch) => ({
    onDisabledCategoryClick: name => dispatch(actionCreator.enableCategoryFilter({name})),
    onEnabledCategoryClick: name => dispatch(actionCreator.disableCategoryFilter({name}))
});

export {mapStateToProps, mapDispatchToProps};