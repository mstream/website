import React, {PropTypes} from "react";
import classNames from "classnames";
import marked from "marked";
import {articleContentToHeadersMapper} from "./ArticleContentToHeadersMapper";
import HeadersListItem from "./HeadersListItem";


const HeadersLists = ({articleContent}) => {
    const headerItems = articleContentToHeadersMapper(articleContent).map((header, i) => (
        <HeadersListItem key={i}
                         headerId={`header${i}`}
                         name={header}/>
    ));
    return (
        <ul className="section table-of-contents">
            {headerItems}
        </ul>
    );
};

HeadersLists.propTypes = {
    articleContent: PropTypes.string.isRequired
};


export default HeadersLists;

