import React, {PropTypes} from "react";
import classNames from "classnames";
import marked from "marked";
import {articleContentToHeadersMapper} from "./ArticleContentToHeadersMapper";
import HeadersListItem from "./HeadersListItem.jsx";


const HeadersLists = ({isLoading, articleContent}) => {
    if (isLoading) {
        return (
            <div className="progress">
                <div className="indeterminate"></div>
            </div>
        );
    }
    const headerItems = articleContentToHeadersMapper(articleContent).map((header, i) => (
        <HeadersListItem key={i}
                         headerId={`header${i}`}
                         name={header}/>
    ));
    return (
        <ul className="section table-of-contents">
            {headerItems}
            <li>
                <a href="#comments">Comments</a>
            </li>
        </ul>
    );
};

HeadersLists.propTypes = {
};


export default HeadersLists;

