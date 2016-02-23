import React, {PropTypes} from "react";
import CategoryItem from "./CategoryListItem.jsx";
import classNames from "classnames";


const CategoriesList = ({
    isLoading,
    categories,
    onCategoryClick,
    header,
    headerColor}) => {

    if (isLoading) {
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );
    }

    const categoriesItems = categories.map((category) => (
        <CategoryItem
            key={category.name}
            {...category}
            onCategoryClick={() => onCategoryClick(category.name)}
        />
    ));

    const categoriesClasses = classNames(
        "categories-filter-list",
        "collection with-header",
        {hide: !categories.length});

    const categoriesHeaderClasses = classNames(
        "collection-header",
        headerColor
    );

    return (
        <ul className={categoriesClasses}>
            <li className={categoriesHeaderClasses}>
                <h6>{header}</h6>
            </li>
            {categoriesItems}
        </ul>
    );
};

CategoriesList.propTypes = {
    categories: PropTypes.arrayOf(PropTypes.shape({
        name: CategoryItem.propTypes.name,
        articlesNumber: CategoryItem.propTypes.articlesNumber
    })).isRequired,
    onCategoryClick: PropTypes.func.isRequired
};


export default CategoriesList;

