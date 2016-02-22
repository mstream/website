import actionCreator from "../../actions/ActionCreator";


const mapStateToProps = (state, ownProps) => ({
    articleContent: state.entities.articles.get(ownProps.params.id).content
});

const mapDispatchToProps = (dispatch) => ({});


export {mapStateToProps, mapDispatchToProps};