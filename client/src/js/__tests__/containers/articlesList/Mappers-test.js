import Immutable from "immutable";
import {mapStateToProps, mapDispatchToProps} from "../../../containers/articlesList/Mappers";


describe("mapStateToProps function", () => {
    it("should map state to props properly", () => {
        const state = {
            articles: Immutable.OrderedSet.of("1", "2"),
            categoryFilter: {
                enabledFilters: Immutable.OrderedSet()
            },
            entities: {
                articles: Immutable.Map({
                    "1": {
                        id: "1",
                        dateCreated: null,
                        title: "article1",
                        summary: "summary1",
                        content: "content1",
                        categories: []
                    },
                    "2": {
                        id: "2",
                        dateCreated: null,
                        title: "article2",
                        summary: "summary2",
                        content: "content2",
                        categories: []
                    }
                })
            },
            userInterface: {
                articlesList: {
                    isFetching: false
                }
            }
        };
        const props = mapStateToProps(state);
        expect(props.articles.length).toEqual(2);
        expect(props.articles[0].id).toEqual("1");
        expect(props.articles[0].dateCreated).toEqual(null);
        expect(props.articles[0].title).toEqual("article1");
        expect(props.articles[0].summary).toEqual("summary1");
        expect(props.articles[0].content).toEqual("content1");
        expect(props.articles[1].id).toEqual("2");
        expect(props.articles[1].dateCreated).toEqual(null);
        expect(props.articles[1].title).toEqual("article2");
        expect(props.articles[1].summary).toEqual("summary2");
        expect(props.articles[1].content).toEqual("content2");
    });
    it("should filter out article not belonging to enabled category", () => {
        const state = {
            articles: Immutable.OrderedSet.of("1", "2", "3"),
            categoryFilter: {
                enabledFilters: Immutable.OrderedSet.of("category1")
            },
            entities: {
                articles: Immutable.Map({
                    "1": {
                        id: "1",
                        dateCreated: null,
                        title: "article1",
                        summary: "summary1",
                        content: "content1",
                        categories: ["category1"]
                    },
                    "2": {
                        id: "2",
                        dateCreated: null,
                        title: "article2",
                        summary: "summary2",
                        content: "content2",
                        categories: ["category2"]
                    },
                    "3": {
                        id: "3",
                        dateCreated: null,
                        title: "article3",
                        summary: "summary3",
                        content: "content3",
                        categories: ["category1", "category3"]
                    }
                })
            },
            userInterface: {
                articlesList: {
                    isFetching: false
                }
            }
        };
        const props = mapStateToProps(state);
        expect(props.articles.length).toEqual(2);
        expect(props.articles[0].id).toEqual("1");
        expect(props.articles[0].dateCreated).toEqual(null);
        expect(props.articles[0].title).toEqual("article1");
        expect(props.articles[0].summary).toEqual("summary1");
        expect(props.articles[0].content).toEqual("content1");
        expect(props.articles[1].id).toEqual("3");
        expect(props.articles[1].dateCreated).toEqual(null);
        expect(props.articles[1].title).toEqual("article3");
        expect(props.articles[1].summary).toEqual("summary3");
        expect(props.articles[1].content).toEqual("content3");
    });
});

