import entities from "../../reducers/entities";
import * as ActionCreators from "../../actions/ActionCreators";


describe("Entities reducer", () => {
    describe("when entities state is initialized", () => {
        const initialState = entities();
        it("articles should be empty", () => {
            expect(initialState.articles.size).toBe(0);
        });
        it("categories should be empty", () => {
            expect(initialState.categories.size).toBe(0);
        });
    });
});
