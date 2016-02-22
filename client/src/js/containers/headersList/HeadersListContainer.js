import { connect } from "react-redux"
import HeadersLists from "../../components/headersList/HeadersLists.jsx";
import * as Mappers from "./Mappers";


const HeadersListContainer = connect(
    Mappers.mapStateToProps,
    Mappers.mapDispatchToProps
)(HeadersLists);


export default HeadersListContainer;