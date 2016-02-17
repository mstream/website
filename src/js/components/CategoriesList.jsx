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

    const anyFilterEnabled = enabledFilters.length > 0;

    const disabledColor = "red accent-1";
    const enabledColor = "green accent-1";

    const availableCategoriesClasses = classNames(
        "collection with-header",
        {hide: availableFilters.length == 0});
    const enabledCategoriesClasses = classNames(
        "collection with-header",
        {hide: !anyFilterEnabled});

    const availableCategoriesHeaderClasses = classNames(
        "collection-header",
        {[enabledColor]: !anyFilterEnabled},
        {[disabledColor]: anyFilterEnabled}
    );
    const enabledCategoriesHeaderClasses = classNames(
        "collection-header",
        [enabledColor]
    );

    const enabledCategoriesHeader = "Enabled filters";
    const availableCategoriesHeader =
        (anyFilterEnabled ? "Disabled" : "Available") + " filters";

    return (
        <div>
            <div className="card">
                <ul className={enabledCategoriesClasses}>
                    <li className={enabledCategoriesHeaderClasses}>
                        <h4>{enabledCategoriesHeader}</h4>
                    </li>
                    {enabledCategoriesItems}
                </ul>
            </div>
            <div className="card">
                <ul className={availableCategoriesClasses}>
                    <li className={availableCategoriesHeaderClasses}>
                        <h4>{availableCategoriesHeader}</h4>
                    </li>
                    {availableCategoriesItems}
                </ul>
            </div>
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

