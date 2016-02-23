import React, {PropTypes} from "react";


const CategoryListItem = ({name, articlesNumber, onCategoryClick}) => (
    <li>
        <a
            href="#"
            onClick={e => {
                    e.preventDefault();
                    onCategoryClick();
                }
            }
            className="collection-item">
            {name}
            <span className="badge">{articlesNumber}</span>
        </a>
    </li>
);

CategoryListItem.propTypes = {
    name: PropTypes.string.isRequired,
    articlesNumber: PropTypes.number.isRequired,
    onCategoryClick: PropTypes.func.isRequired
};


export default CategoryListItem;