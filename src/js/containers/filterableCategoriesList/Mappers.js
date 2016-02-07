import * as ActionCreators from "../../ActionCreators";


const FilterMapperBuilder = (state) =>
    (id) => Object.assign(
        {},
        state.entities.categories.get(id),
        {articlesNumber: state.articlesInCategoryCounter.get(id)}
    );

const mapStateToProps = (state) => {
    const filterMapper = FilterMapperBuilder(state);
    return {
        availableCategoryFilters: state.availableCategoryFilters.toArray().map(filterMapper),
        enabledCategoryFilters: state.enabledCategoryFilters.toArray().map(filterMapper)
    };
};

const mapDispatchToProps = (dispatch) => ({
    onDisabledCategoryClick: (id) => dispatch(ActionCreators.enableCategoryFilter(id)),
    onEnabledCategoryClick: (id) => dispatch(ActionCreators.disableCategoryFilter(id))
});

export {mapStateToProps, mapDispatchToProps};