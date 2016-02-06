import React from "react";

export default class CategoryItem extends React.Component {
    render() {
        const {name, articlesNumber} = this.props.categories;
        return (
            <li>
                <a href="#" className="list-group-item">
                    <span className="badge">{articlesNumber}</span>
                    {name}
                </a>
            </li>
        );
    }
}
