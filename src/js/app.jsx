import React from "react";
import ReactDOM from "react-dom";

class Post {
    constructor(title) {
        this.title = title;
    }
}

const posts = [new Post("aaa"), new Post("bbb"), new Post("ccc")];

class PostsList extends React.Component {
    render() {
        const posts = this.props.posts.map((post) => <PostHeader title={post.title}/>);
        return <ul>{posts}</ul>;
    }
}

class PostHeader extends React.Component {
    render() {
        return <li>{this.props.title}</li>
    }
}

ReactDOM.render(
    <PostsList posts={posts}/>,
    document.getElementById("content")
);