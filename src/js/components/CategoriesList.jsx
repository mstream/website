import React, {PropTypes} from "react";
import CategoryItem from "./CategoryItem.jsx";

const CategoriesList = ({availableFilters, enabledFilters, onDisabledCategoryClick, onEnabledCategoryClick}) => {
    const availableCategoriesFragment = availableFilters.map((category) => (
        <CategoryItem
            key={category.name}
            {...category}
            enabled={false}
            onClick={(e) => {
                    e.preventDefault();
                    onDisabledCategoryClick(category.name);
                }
            }
        />
    ));
    const enabledCategoriesFragment = enabledFilters.map((category) => (
        <CategoryItem
            key={category.name}
            {...category}
            enabled={true}
            onClick={(e) => {
                    e.preventDefault();
                    onEnabledCategoryClick(category.name);
                }
            }
        />
    ));
    return (
        <div>
            <ul className="list-unstyled list-group">
                {enabledCategoriesFragment}
            </ul>
            <ul className="list-unstyled list-group">
                {availableCategoriesFragment}
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

