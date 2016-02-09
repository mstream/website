import Immutable from "immutable";
import {mapStateToProps, mapDispatchToProps} from "../../../containers/filterableArticlesList/Mappers";

describe("mapStateToProps function", () => {
    it("should map state to props properly", () => {
        const state = {
            articles: Immutable.OrderedSet.of("1", "2"),
            entities: {
                articles: Immutable.Map({
                    "1": {
                        id: "1",
                        dateCreated: null,
                        title: "article1",
                        summary: "summary1",
                        content: "content1"
                    },
                    "2": {
                        id: "2",
                        dateCreated: null,
                        title: "article2",
                        summary: "summary2",
                        content: "content2"
                    }
                })
            }
        };
        const props = mapStateToProps(state);
        expect(props.articles.length).toBe(2);
        expect(props.articles[0].id).toBe("1");
        expect(props.articles[0].dateCreated).toBe(null);
        expect(props.articles[0].title).toBe("article1");
        expect(props.articles[0].summary).toBe("summary1");
        expect(props.articles[0].content).toBe("content1");
        expect(props.articles[1].id).toBe("2");
        expect(props.articles[1].dateCreated).toBe(null);
        expect(props.articles[1].title).toBe("article2");
        expect(props.articles[1].summary).toBe("summary2");
        expect(props.articles[1].content).toBe("content2");
    });
});

