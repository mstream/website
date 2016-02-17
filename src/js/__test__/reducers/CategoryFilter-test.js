import categoryFilter from "../../reducers/categoryFilter";
import ActionCreatorFactory from "../../actions/ActionCreatorFactory";
import Immutable from "immutable";


describe("CategoryFilter reducer", () => {

    const generatedId = "GENERATED_ID";
    const actionCreator = new ActionCreatorFactory(() => generatedId);

    describe("when category filter state is initialized", () => {
        const initialState = categoryFilter();
        it("there should be no available filters", () => {
            expect(initialState.availableFilters.size).toBe(0);
        });
        it("there should be no enabled filters", () => {
            expect(initialState.enabledFilters.size).toBe(0);
        });
        it("articlesInCategoryCounter should be empty", () => {
            expect(initialState.articlesInCategoryCounter.size).toBe(0);
        });
    });

    describe("when a new category tag is created", () => {
        const categoryName = "category1";
        const category = {name: categoryName};
        const initialState = categoryFilter();
        const state = categoryFilter(initialState, actionCreator.addCategoryTag(category));
        it("it should be added to the available filters set", () => {
            expect(state.availableFilters.size).toBe(1);
            expect(state.availableFilters.has(categoryName)).toBeTruthy();
        });
        it("its articles counter should be 1", () => {
            expect(state.articlesInCategoryCounter.get(categoryName)).toBe(1);
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
            articlesCategories: Immutable.Map(),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName1]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.addCategoryTag(category2));
        it("the available filters set should contain both of them", () => {
            expect(state.availableFilters.size).toBe(2);
            expect(state.availableFilters.has(categoryName1)).toBeTruthy();
            expect(state.availableFilters.has(categoryName2)).toBeTruthy();
        });
        it("the old category articles counter should be 1", () => {
            expect(state.articlesInCategoryCounter.get(categoryName1)).toBe(1);
        });
        it("the added category articles counter should be 1", () => {
            expect(state.articlesInCategoryCounter.get(categoryName2)).toBe(1);
        });
    });

    describe("when a second, same category tag is created", () => {
        const categoryName = "category";
        const category = {name: categoryName};
        const initialState = {
            availableFilters: Immutable.OrderedSet.of(categoryName),
            enabledFilters: Immutable.OrderedSet(),
            articlesCategories: Immutable.Map(),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.addCategoryTag(category));
        it("the available filters set should not change", () => {
            expect(state.availableFilters.size).toBe(1);
            expect(state.availableFilters.has(categoryName)).toBeTruthy();
        });
        it("the old category articles counter should be 2", () => {
            expect(state.articlesInCategoryCounter.get(categoryName)).toBe(2);
        });
    });

    describe("when a filter is enabled", () => {
        const categoryName = "category";
        const category = {name: categoryName};
        const initialState = {
            availableFilters: Immutable.OrderedSet.of(categoryName),
            enabledFilters: Immutable.OrderedSet(),
            articlesCategories: Immutable.Map(),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.enableCategoryFilter(category));
        it("the enabled filter should be removed from the available filters set", () => {
            expect(state.availableFilters.size).toBe(0);
            expect(state.availableFilters.has(categoryName)).toBeFalsy();
        });
        it("the enabled filter should be added to the enabled filters set", () => {
            expect(state.enabledFilters.size).toBe(1);
            expect(state.enabledFilters.has(categoryName)).toBeTruthy();
        });
    });

    describe("when a filter is disabled", () => {
        const categoryName = "category";
        const category = {name: categoryName};
        const initialState = {
            availableFilters: Immutable.OrderedSet(),
            enabledFilters: Immutable.OrderedSet.of(categoryName),
            articlesCategories: Immutable.Map(),
            articlesInCategoryCounter: Immutable.Map({
                [categoryName]: 1
            })
        };
        const state = categoryFilter(initialState, actionCreator.disableCategoryFilter(category));
        it("the disabled filter should be removed from the enabled filters set", () => {
            expect(state.enabledFilters.size).toBe(0);
            expect(state.enabledFilters.has(categoryName)).toBeFalsy();
        });
        it("the disabled filter should be added to the available filters set", () => {
            expect(state.availableFilters.size).toBe(1);
            expect(state.availableFilters.has(categoryName)).toBeTruthy();
        });
    });
});
