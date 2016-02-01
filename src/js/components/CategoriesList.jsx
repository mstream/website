import React from "react";
import CategoryItem from "./CategoryItem.jsx";


export default class CategoriesList extends React.Component {
    render() {
        const categories = this.props.categories.map((category) =>
            <CategoryItem key={category.id} categories={category}/>);
        return (<ul className="list-unstyled list-group">{categories}</ul>);
    }
}
