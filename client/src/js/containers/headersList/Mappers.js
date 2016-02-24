import actionCreator from "../../actions/ActionCreator";


const mapStateToProps = (state, ownProps) => ({
    isLoading: state.userInterface.articleView.isFetchingContent,
    articleContent: state.entities.articles.get(ownProps.params.id).content
});

const mapDispatchToProps = (dispatch) => ({});


export {mapStateToProps, mapDispatchToProps};