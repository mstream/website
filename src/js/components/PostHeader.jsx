import React from "react";

export default class PostHeader extends React.Component {
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
