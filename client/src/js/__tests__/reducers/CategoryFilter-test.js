import categoryFilter from "../../reducers/categoryFilter";
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";
import Actions from "./../../actions/Actions";
import Immutable from "immutable";
import { createAction } from "redux-actions";


describe("CategoryFilter reducer", () => {

    const generatedId = "GENERATED_ID";
    const actionCreator = new ActionCreatorFactory(() => generatedId);

    describe("when category filter state is initialized", () => {
        const initialState = categoryFilter(undefined, {});
        it("there should be no available filters", () => {
            expect(initialState.availableFilters.size).toEqual(0);
        });
        it("there should be no enabled filters", () => {
            expect(initialState.enabledFilters.size).toEqual(0);
        });
        it("articlesInCategoryCounter should be empty", () => {
            expect(initialState.articlesInCategoryCounter.size).toEqual(0);
        });
    });

    describe("when a new category tag is created", () => {
        const categoryName = "category1";
        const category = {name: categoryName};
        const initialState = {
            availableFilters: Immutable.OrderedSet(),
            enabledFilters: Immutable.OrderedSet(),
            articlesInCategoryCounter: Immutable.Map()
        };
        const state = categoryFilter(initialState, actionCreator.addCategoryTag(category));
        it("it should be added to the available filters set", () => {
            expect(state.availableFilters.size).toEqual(1);
            expect(state.availableFilters.has(categoryName)).toBeTruthy();
        });
        it("its articles counter should be 1", () => {
            expect(state.articlesInCategoryCounter.get(categoryName)).toEqual(1);
        });
    });

    describe("when a second, different category tag is created", () => {
        const categoryName1 = "category1";
        const categoryName2 = "category2";
        const category1 = {name: categoryName1};
        const category2 = {name: categoryName2};
        const initialState = {
            availableFilters: Immutable.OrderedSet.of(categoryName1),
            enabledFilters: Immutable.OrderedSet(),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName1]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.addCategoryTag(category2));
        it("the available filters set should contain both of them", () => {
            expect(state.availableFilters.size).toEqual(2);
            expect(state.availableFilters.has(categoryName1)).toBeTruthy();
            expect(state.availableFilters.has(categoryName2)).toBeTruthy();
        });
        it("the old category articles counter should be 1", () => {
            expect(state.articlesInCategoryCounter.get(categoryName1)).toEqual(1);
        });
        it("the added category articles counter should be 1", () => {
            expect(state.articlesInCategoryCounter.get(categoryName2)).toEqual(1);
        });
    });

    describe("when a second, same category tag is created", () => {
        const categoryName = "category";
        const category = {name: categoryName};
        const initialState = {
            availableFilters: Immutable.OrderedSet.of(categoryName),
            enabledFilters: Immutable.OrderedSet(),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.addCategoryTag(category));
        it("the available filters set should not change", () => {
            expect(state.availableFilters.size).toEqual(1);
            expect(state.availableFilters.has(categoryName)).toBeTruthy();
        });
        it("the old category articles counter should be 2", () => {
            expect(state.articlesInCategoryCounter.get(categoryName)).toEqual(2);
        });
    });

    describe("when articles are received", () => {
        const initialState = {
            availableFilters: Immutable.OrderedSet(),
            enabledFilters: Immutable.OrderedSet(),
            articlesInCategoryCounter: Immutable.Map()
        };
        const article1 = {
            id: "1",
            title: "title1",
            summary: "summary1",
            content: "content1",
            categories: ["categoryA", "categoryB"],
            dateCreated: new Date(0)
        };
        const article2 = {
            id: "2",
            title: "title2",
            summary: "summary2",
            content: "content2",
            categories: ["categoryB", "categoryA"],
            dateCreated: new Date(0)
        };
        const article3 = {
            id: "3",
            title: "title3",
            summary: "summary3",
            content: "content3",
            categories: ["categoryC"],
            dateCreated: new Date(0)
        };
        const receivedArticles = [article1, article2, article3];
        const state = categoryFilter(initialState, createAction(Actions.RECEIVE_ARTICLES)(receivedArticles));
        it("there should be 3 available categories", () => {
            expect(state.availableFilters.size).toEqual(3);
            expect(state.availableFilters.has("categoryA")).toBeTruthy();
            expect(state.availableFilters.has("categoryB")).toBeTruthy();
            expect(state.availableFilters.has("categoryC")).toBeTruthy();
        });
        it("categories counters should be proper", () => {
            expect(state.articlesInCategoryCounter.get("categoryA")).toEqual(2);
            expect(state.articlesInCategoryCounter.get("categoryB")).toEqual(2);
            expect(state.articlesInCategoryCounter.get("categoryC")).toEqual(1);
        });
    });

    describe("when a filter is enabled", () => {
        const categoryName = "category";
        const category = {name: categoryName};
        const initialState = {
            availableFilters: Immutable.OrderedSet.of(categoryName),
            enabledFilters: Immutable.OrderedSet(),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.enableCategoryFilter(category));
        it("the enabled filter should be removed from the available filters set", () => {
            expect(state.availableFilters.size).toEqual(0);
            expect(state.availableFilters.has(categoryName)).toBeFalsy();
        });
        it("the enabled filter should be added to the enabled filters set", () => {
            expect(state.enabledFilters.size).toEqual(1);
            expect(state.enabledFilters.has(categoryName)).toBeTruthy();
        });
    });

    describe("when a filter is disabled", () => {
        const categoryName = "category";
        const category = {name: categoryName};
        const initialState = {
            availableFilters: Immutable.OrderedSet(),
            enabledFilters: Immutable.OrderedSet.of(categoryName),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.disableCategoryFilter(category));
        it("the disabled filter should be removed from the enabled filters set", () => {
            expect(state.enabledFilters.size).toEqual(0);
            expect(state.enabledFilters.has(categoryName)).toBeFalsy();
        });
        it("the disabled filter should be added to the available filters set", () => {
            expect(state.availableFilters.size).toEqual(1);
            expect(state.availableFilters.has(categoryName)).toBeTruthy();
        });
    });
});
