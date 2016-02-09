import * as ActionCreators from "../../ActionCreators";


const FilterMapperBuilder = (state) =>
    (id) => state.entities.articles.get(id);

const mapStateToProps = (state) => {
    const articleMapper = FilterMapperBuilder(state);
    return {
        articles: state.articles.toArray().map(articleMapper)
    };
};

const mapDispatchToProps = (dispatch) => ({

});

export {mapStateToProps, mapDispatchToProps};