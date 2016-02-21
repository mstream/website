import React, {PropTypes} from "react";


const HeadersListItem = (props) => (
    <li>
        <a href={`#${props.headerId}`}>{props.name}</a>
    </li>
);


export default HeadersListItem;