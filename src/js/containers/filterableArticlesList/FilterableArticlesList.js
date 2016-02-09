import { connect } from "react-redux"
import ArticlesList from "../../components/ArticlesList.jsx";
import * as Mappers from "./Mappers";


const FilterableArticlesList = connect(
    Mappers.mapStateToProps,
    Mappers.mapDispatchToProps
)(ArticlesList);

export default FilterableArticlesList;