import actionCreator from "../../actions/ActionCreator";


const mapStateToProps = (state, ownProps) => ({
    isLoading: state.userInterface.articleView.isFetching,
    articleContent: state.entities.articles.get(ownProps.params.id).content
});

const mapDispatchToProps = (dispatch) => ({});


export {mapStateToProps, mapDispatchToProps};