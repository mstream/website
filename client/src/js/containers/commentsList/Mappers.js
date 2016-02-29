import actionCreator from "../../actions/ActionCreator";
import IdToEntityMapperBuilder from "../IdToEntityMapperBuilder";
import * as ActionCreators from "../../actions/ActionCreatorFactory";
import {convertToDisplay} from "./CommentDisplayConverter";


const mapStateToProps = (state, ownProps) => {
    const idToComment = IdToEntityMapperBuilder(state, "comments");
    const isLoading = state.userInterface.articleView.isFetchingComments;
    let comments = [];
    if (!isLoading) {
        comments = state.comments
            .get(ownProps.articleId)
            .map(idToComment)
            .map(convertToDisplay)
            .toArray();
    }
    return {
        isLoading: state.userInterface.articleView.isFetchingComments,
        comments
    };
};

const mapDispatchToProps = dispatch => ({});


export {mapStateToProps, mapDispatchToProps};