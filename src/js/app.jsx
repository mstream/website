import React from "react";
import ReactDOM from "react-dom";

class Post {
    constructor(id, title, summary, dateCreated) {
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.dateCreated = dateCreated;
    }
}

const summary = ((amount) => {
    const generatedSummary = [];
    for (let i = 1; i <= amount; i++) {
        generatedSummary.push("summary");
    }
    return generatedSummary.join(" ");
})(50);

const posts = ((amount) => {
    const generatedPosts = [];
    for (let i = 1; i <= amount; i++) {
        generatedPosts.push(new Post(i, `Post #${i}`, summary, new Date()));
    }
    return generatedPosts;
})(100);

class PostsList extends React.Component {
    render() {
        const posts = this.props.posts.map((post) =>
            <PostHeader key={post.id} post={post}/>);
        return (<ul className="list-unstyled list-group">{posts}</ul>);
    }
}

class PostHeader extends React.Component {
    render() {
        const {title, summary, dateCreated} = this.props.post;
        return (
            <li>
                <a href="#" className="list-group-item">
                    <article className="media">
                        <figure className="media-left media-top">
                            <img
                                src="http://lorempixel.com/image_output/technics-q-c-240-240-4.jpg"/>
                        </figure>
                        <div className="media-body">
                            <header>
                                <h2>{title}</h2>
                            </header>
                            <p>{summary}</p>
                            <footer>
                                <h6 className="text-right">
                                    <em>Created: <strong><time>{dateCreated.toDateString()}</time></strong>
                                    </em>
                                </h6>
                            </footer>
                        </div>
                    </article>
                </a>
            </li>
        );
    }
}

ReactDOM.render(
    <main><PostsList posts={posts}/></main>,
    document.getElementById("content")
);