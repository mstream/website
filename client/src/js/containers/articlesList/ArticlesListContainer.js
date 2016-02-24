import { connect } from "react-redux"
import ArticlesList from "../../components/articlesList/ArticlesList.jsx";
import * as Mappers from "./Mappers";


const ArticlesListContainer = connect(
    Mappers.mapStateToProps,
    Mappers.mapDispatchToProps
)(ArticlesList);

export default ArticlesListContainer;