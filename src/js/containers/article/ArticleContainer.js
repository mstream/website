import { connect } from "react-redux"
import Article from "../../components/Article.jsx";
import * as Mappers from "./Mappers";


const ArticleContainer = connect(
    Mappers.mapStateToProps,
    Mappers.mapDispatchToProps
)(Article);


export default ArticleContainer;