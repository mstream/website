import { connect } from "react-redux"
import CategoriesLists from "../../components/CategoriesLists.jsx";
import * as Mappers from "./Mappers";


const FilterableCategoriesList = connect(
    Mappers.mapStateToProps,
    Mappers.mapDispatchToProps
)(CategoriesLists);

export default FilterableCategoriesList;