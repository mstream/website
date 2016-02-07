import { connect } from "react-redux"
import CategoriesList from "../../components/CategoriesList.jsx";
import * as Mappers from "./Mappers";


const FilterableCategoriesList = connect(
    Mappers.mapStateToProps,
    Mappers.mapDispatchToProps
)(CategoriesList);

export default FilterableCategoriesList;