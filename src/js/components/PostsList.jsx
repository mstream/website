import React from "react";
import PostHeader from "./PostHeader.jsx";

export default class PostsList extends React.Component {
    render() {
        const posts = this.props.posts.map((post) =>
            <PostHeader key={post.id} post={post}/>);
        return (<ul className="list-unstyled list-group">{posts}</ul>);
    }
}
