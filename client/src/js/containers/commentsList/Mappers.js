import actionCreator from "../../actions/ActionCreator";
import * as ActionCreators from "../../actions/ActionCreatorFactory";


const CommentMapperBuilder = state => id => state.entities.comments.get(id);

const mapStateToProps = (state, ownProps) => {
    const commentMapper = CommentMapperBuilder(state);
    const isLoading = state.userInterface.articleView.isFetchingComments;
    let comments = [];
    if (!isLoading) {
        comments = state.comments.get(ownProps.articleId).map(commentMapper).toArray();
    }
    return {
        isLoading: state.userInterface.articleView.isFetchingComments,
        comments: comments
    };
};

const mapDispatchToProps = dispatch => ({
});


export {mapStateToProps, mapDispatchToProps};