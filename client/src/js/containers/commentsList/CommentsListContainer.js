import { connect } from "react-redux"
import CommentsList from "../../components/commentsList/CommentsList.jsx";
import * as Mappers from "./Mappers";


const CommentsListContainer = connect(
    Mappers.mapStateToProps,
    Mappers.mapDispatchToProps
)(CommentsList);


export default CommentsListContainer;