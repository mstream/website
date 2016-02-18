import React, {PropTypes} from "react";


const CategoryItem = ({name, articlesNumber, onClick}) => (
    <li>
        <a
            href="#"
            onClick={onClick}
            className="collection-item">
            {name}
            <span className="badge">{articlesNumber}</span>
        </a>
    </li>
);

CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    articlesNumber: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};


export default CategoryItem;