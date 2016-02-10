import React, {PropTypes} from "react";
import CategoryItem from "./CategoryItem.jsx";
import classNames from "classnames";

const CategoriesList = ({availableFilters, enabledFilters, onDisabledCategoryClick, onEnabledCategoryClick}) => {
    const availableCategoriesItems = availableFilters.map((category) => (
        <CategoryItem
            key={category.name}
            {...category}
            onClick={(e) => {
                    e.preventDefault();
                    onDisabledCategoryClick(category.name);
                }
            }
        />
    ));
    const enabledCategoriesItems = enabledFilters.map((category) => (
        <CategoryItem
            key={category.name}
            {...category}
            onClick={(e) => {
                    e.preventDefault();
                    onEnabledCategoryClick(category.name);
                }
            }
        />
    ));
    const availableCategoriesClassNames = classNames(
        "collection with-header",
        {hide: availableFilters.length == 0});
    const enabledCategoriesClassNames = classNames(
        "collection with-header",
        {hide: enabledFilters.length == 0});
    return (
        <div>
            <ul className={enabledCategoriesClassNames}>
                <li className="collection-header"><h4>Active filters</h4></li>
                {enabledCategoriesItems}
            </ul>
            <ul className={availableCategoriesClassNames}>
                <li className="collection-header"><h4>Available filters</h4></li>
                {availableCategoriesItems}
            </ul>
        </div>

    );
};

CategoriesList.propTypes = {
    availableFilters: PropTypes.arrayOf(PropTypes.shape({
        name: CategoryItem.propTypes.name,
        articlesNumber: CategoryItem.propTypes.articlesNumber
    })).isRequired,
    enabledFilters: PropTypes.arrayOf(PropTypes.shape({
        name: CategoryItem.propTypes.name,
        articlesNumber: CategoryItem.propTypes.articlesNumber
    })).isRequired,
    onDisabledCategoryClick: PropTypes.func.isRequired,
    onEnabledCategoryClick: PropTypes.func.isRequired
};

export default CategoriesList;

