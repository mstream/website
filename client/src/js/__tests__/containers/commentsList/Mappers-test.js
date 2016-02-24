import Immutable from "immutable";
import {mapStateToProps, mapDispatchToProps} from "../../../containers/commentsList/Mappers";


describe("mapStateToProps function", () => {
    it("should map state to props properly", () => {
        const articleId = "1";
        const otherId = "2";
        const state = {
            comments: Immutable.Map({
                [articleId]: Immutable.List.of("1", "2"),
                [otherId]: Immutable.List.of("3")
            }),
            entities: {
                comments: Immutable.Map({
                    "1": {
                        id: "1",
                        articleId: articleId,
                        dateCreated: new Date(0),
                        author: "author1",
                        content: "content1"
                    },
                    "2": {
                        id: "2",
                        articleId: articleId,
                        dateCreated: new Date(0),
                        author: "author2",
                        content: "content2"
                    },
                    "3": {
                        id: "3",
                        articleId: otherId,
                        dateCreated: new Date(0),
                        author: "author3",
                        content: "content3"
                    }
                })
            },
            userInterface: {
                articleView: {
                    isFetchingComments: false
                }
            }
        };
        const ownProps = {articleId};
        const props = mapStateToProps(
            state,
            ownProps
        );
        expect(props.comments.length).toBe(2);
        expect(props.comments[0].id).toBe("1");
        expect(props.comments[0].dateCreated).toEqual(new Date(0));
        expect(props.comments[0].author).toBe("author1");
        expect(props.comments[0].content).toBe("content1");
        expect(props.comments[1].id).toBe("2");
        expect(props.comments[1].dateCreated).toEqual(new Date(0));
        expect(props.comments[1].author).toBe("author2");
        expect(props.comments[1].content).toBe("content2");
    });
});

