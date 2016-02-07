import app from "../../reducers/App";
import * as ActionCreators from "../../ActionCreators";

const getState = (reducer, initialState = {}, ...actions) => {
    let state = initialState;
    actions.forEach((action) => state = reducer(state, action));
    return state;
};

describe("App reducer", () => {
    const initialState = app();
    it("should generate the initial state", () => {
        const state = initialState;
        expect(state.entities.categories.size).toBe(0);
        expect(state.availableCategoryFilters.size).toBe(0);
        expect(state.enabledCategoryFilters.size).toBe(0);
        expect(state.articlesInCategoryCounter.size).toBe(0);
    });
    it("should add a category tag", () => {
        const state = getState(
            app,
            initialState,
            ActionCreators.addCategoryTag("1", "category1")
        );
        expect(state.entities.categories.size).toBe(1);
        expect(state.entities.categories.get("1").id).toBe("1");
        expect(state.entities.categories.get("1").name).toBe("category1");
        expect(state.availableCategoryFilters.size).toBe(1);
        expect(state.availableCategoryFilters.has("1")).toBeTruthy();
        expect(state.enabledCategoryFilters.size).toBe(0);
        expect(state.enabledCategoryFilters.has("1")).toBeFalsy();
        expect(state.articlesInCategoryCounter.size).toBe(1);
        expect(state.articlesInCategoryCounter.get("1")).toBe(1);
    });
    it("should add an already existing category tag", () => {
        const state = getState(
            app,
            initialState,
            ActionCreators.addCategoryTag("1", "category1"),
            ActionCreators.addCategoryTag("1", "category1")
        );
        expect(state.entities.categories.size).toBe(1);
        expect(state.entities.categories.get("1").id).toBe("1");
        expect(state.entities.categories.get("1").name).toBe("category1");
        expect(state.availableCategoryFilters.size).toBe(1);
        expect(state.availableCategoryFilters.has("1")).toBeTruthy();
        expect(state.articlesInCategoryCounter.size).toBe(1);
        expect(state.articlesInCategoryCounter.get("1")).toBe(2);
    });
    it("should add an second category tag", () => {
        const state = getState(
            app,
            initialState,
            ActionCreators.addCategoryTag("1", "category1"),
            ActionCreators.addCategoryTag("2", "category2")
        );
        expect(state.entities.categories.size).toBe(2);
        expect(state.entities.categories.get("1").id).toBe("1");
        expect(state.entities.categories.get("1").name).toBe("category1");
        expect(state.entities.categories.get("2").id).toBe("2");
        expect(state.entities.categories.get("2").name).toBe("category2");
        expect(state.availableCategoryFilters.size).toBe(2);
        expect(state.availableCategoryFilters.has("1")).toBeTruthy();
        expect(state.availableCategoryFilters.has("2")).toBeTruthy();
        expect(state.articlesInCategoryCounter.size).toBe(2);
        expect(state.articlesInCategoryCounter.get("1")).toBe(1);
        expect(state.articlesInCategoryCounter.get("2")).toBe(1);
    });
    it("should enable a category filter", () => {
        const state = getState(
            app,
            initialState,
            ActionCreators.addCategoryTag("1", "category1"),
            ActionCreators.enableCategoryFilter("1")
        );
        expect(state.entities.categories.size).toBe(1);
        expect(state.entities.categories.get("1").id).toBe("1");
        expect(state.entities.categories.get("1").name).toBe("category1");
        expect(state.availableCategoryFilters.size).toBe(0);
        expect(state.availableCategoryFilters.has("1")).toBeFalsy();
        expect(state.enabledCategoryFilters.size).toBe(1);
        expect(state.enabledCategoryFilters.has("1")).toBeTruthy();
        expect(state.articlesInCategoryCounter.size).toBe(1);
        expect(state.articlesInCategoryCounter.get("1")).toBe(1);
    });
    it("should disable a category filter", () => {
        const state = getState(
            app,
            initialState,
            ActionCreators.addCategoryTag("1", "category1"),
            ActionCreators.enableCategoryFilter("1"),
            ActionCreators.disableCategoryFilter("1")
        );
        expect(state.entities.categories.size).toBe(1);
        expect(state.entities.categories.get("1").id).toBe("1");
        expect(state.entities.categories.get("1").name).toBe("category1");
        expect(state.availableCategoryFilters.size).toBe(1);
        expect(state.availableCategoryFilters.has("1")).toBeTruthy();
        expect(state.enabledCategoryFilters.size).toBe(0);
        expect(state.enabledCategoryFilters.has("1")).toBeFalsy();
        expect(state.articlesInCategoryCounter.size).toBe(1);
        expect(state.articlesInCategoryCounter.get("1")).toBe(1);
    });
});

