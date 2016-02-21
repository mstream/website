import React, {PropTypes} from "react";
import classNames from "classnames";
import CategoriesList from "./CategoriesList.jsx";
import CategoryItem from "./CategoryListItem.jsx";


const disabledColor = "red accent-1";
const enabledColor = "green accent-1";

const CategoriesLists = ({
    availableFilters,
    enabledFilters,
    onDisabledCategoryClick,
    onEnabledCategoryClick}) => {

    const anyFilterEnabled = enabledFilters.length > 0;

    const enabledCategoriesHeader = "Enabled filters";
    const availableCategoriesHeader =
        (anyFilterEnabled ? "Disabled" : "Available") + " filters";

    const enabledCategoriesHeaderColor = enabledColor;
    const availableCategoriesHeaderColor =
        anyFilterEnabled ? disabledColor : enabledColor;

    return (
        <div>
            <CategoriesList
                categories={enabledFilters}
                header={enabledCategoriesHeader}
                headerColor={enabledCategoriesHeaderColor}
                onCategoryClick={onEnabledCategoryClick}
            />
            <CategoriesList
                categories={availableFilters}
                header={availableCategoriesHeader}
                headerColor={availableCategoriesHeaderColor}
                onCategoryClick={onDisabledCategoryClick}
            />
        </div>
    );
};

CategoriesLists.propTypes = {
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


export default CategoriesLists;

