import React, {PropTypes} from "react";
import classNames from "classnames";


const CategoryItem = ({id, name, articlesNumber, enabled, onClick}) => (
    <li>
        <a
            href="#"
            onClick={onClick}
            className={classNames("list-group-item", {"active": enabled})}>
            <span
                className={classNames("glyphicon", {"glyphicon-minus": enabled}, {"glyphicon-plus": !enabled})}
                aria-hidden="true">
            </span>
            <span className="text-center">{name}</span>
            <span className="badge">{articlesNumber}</span>
        </a>
    </li>
);

CategoryItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    articlesNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};


export default CategoryItem;