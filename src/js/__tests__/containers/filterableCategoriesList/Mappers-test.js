import Immutable from "immutable";
import {mapStateToProps, mapDispatchToProps} from "../../../containers/categoriesLists/Mappers";

describe("mapStateToProps function", () => {
    it("should map state to props properly", () => {
        const state = {
            entities: {
                categories: Immutable.Map({
                    "category1": "category1",
                    "category2": "category2"
                })
            },
            categoryFilter: {
                availableFilters: Immutable.OrderedSet.of("category1", "category2"),
                enabledFilters: Immutable.Set(),
                articlesInCategoryCounter: Immutable.Map({
                    "category1": 2,
                    "category2": 4
                }),
            }
        };
        const props = mapStateToProps(state);
        expect(props.availableFilters.length).toBe(2);
        expect(props.availableFilters[0].articlesNumber).toBe(2);
        expect(props.availableFilters[1].name).toBe("category2");
        expect(props.availableFilters[1].articlesNumber).toBe(4);
        expect(props.enabledFilters.length).toBe(0);
    });
});

