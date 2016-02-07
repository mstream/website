class Category {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

const categories = ((amount) => {
    const generatedCategories = [];
    for (let i = 1; i <= amount; i++) {
        const id = i % 10 + 1;
        generatedCategories.push(new Category(id.toString(), `Category #${id}`));
    }
    return generatedCategories;
})(35);

export {categories};