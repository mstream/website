import actionCreator from "../../actions/ActionCreator";
import {convertToDisplay} from "./ArticleDisplayConverter";


const mapStateToProps = (state, ownProps) => {
    const isLoading = state.userInterface.articleView.isFetchingContent;
    let article = {};
    if (!isLoading) {
        article = convertToDisplay(
            state.entities.articles.get(ownProps.params.id)
        );
    }
    return {
        isLoading,
        article
    };
};

const mapDispatchToProps = (dispatch) => ({});


export {mapStateToProps, mapDispatchToProps};