import Immutable from "immutable";
import {mapStateToProps, mapDispatchToProps} from "../../../containers/filterableCategoriesList/Mappers";

describe("mapStateToProps function", () => {
    it("should map state to props properly", () => {
        const state = {
            availableCategoryFilters: Immutable.OrderedSet.of("1", "2"),
            enabledCategoryFilters: Immutable.Set(),
            articlesInCategoryCounter: Immutable.Map({
                "1": 2,
                "2": 4
            }),
            entities: {
                categories: Immutable.Map({
                    "1": {
                        id: "1",
                        name: "category1"
                    },
                    "2": {
                        id: "2",
                        name: "category2"
                    }
                })
            }
        };
        const props = mapStateToProps(state);
        expect(props.availableCategoryFilters.length).toBe(2);
        expect(props.availableCategoryFilters[0].id).toBe("1");
        expect(props.availableCategoryFilters[0].name).toBe("category1");
        expect(props.availableCategoryFilters[0].articlesNumber).toBe(2);
        expect(props.availableCategoryFilters[1].id).toBe("2");
        expect(props.availableCategoryFilters[1].name).toBe("category2");
        expect(props.availableCategoryFilters[1].articlesNumber).toBe(4);
        expect(props.enabledCategoryFilters.length).toBe(0);
    });
});

