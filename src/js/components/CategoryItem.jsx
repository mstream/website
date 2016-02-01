import React from "react";

export default class CategoryItem extends React.Component {
    render() {
        const {name, postsNumber} = this.props.categories;
        return (
            <li>
                <a href="#" className="list-group-item">
                    <span className="badge">{postsNumber}</span>
                    {name}
                </a>
            </li>
        );
    }
}
