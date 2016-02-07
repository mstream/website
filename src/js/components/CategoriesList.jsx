import React, {PropTypes} from "react";
import CategoryItem from "./CategoryItem.jsx";

const CategoriesList = ({availableCategoryFilters, enabledCategoryFilters, onDisabledCategoryClick, onEnabledCategoryClick}) => {
    const availableCategoriesFragment = availableCategoryFilters.map((category) => (
        <CategoryItem
            key={category.id}
            {...category}
            enabled={false}
            onClick={(e) => {
                    e.preventDefault();
                    onDisabledCategoryClick(category.id);
                }
            }
        />
    ));
    const enabledCategoriesFragment = enabledCategoryFilters.map((category) => (
        <CategoryItem
            key={category.id}
            {...category}
            enabled={true}
            onClick={(e) => {
                    e.preventDefault();
                    onEnabledCategoryClick(category.id);
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
    availableCategoryFilters: PropTypes.arrayOf(PropTypes.shape({
        id: CategoryItem.propTypes.id,
        name: CategoryItem.propTypes.name,
        articlesNumber: CategoryItem.propTypes.articlesNumber
    })).isRequired,
    enabledCategoryFilters: PropTypes.arrayOf(PropTypes.shape({
        id: CategoryItem.propTypes.id,
        name: CategoryItem.propTypes.name,
        articlesNumber: CategoryItem.propTypes.articlesNumber
    })).isRequired,
    onDisabledCategoryClick: PropTypes.func.isRequired,
    onEnabledCategoryClick: PropTypes.func.isRequired
};

export default CategoriesList;

