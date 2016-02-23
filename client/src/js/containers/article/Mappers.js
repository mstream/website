import actionCreator from "../../actions/ActionCreator";


const mapStateToProps = (state, ownProps) => ({
    isLoading: state.userInterface.articleView.isFetching,
    article: state.entities.articles.get(ownProps.params.id)
});

const mapDispatchToProps = (dispatch) => ({});


export {mapStateToProps, mapDispatchToProps};