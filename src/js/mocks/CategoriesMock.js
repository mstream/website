class Category {
    constructor(id, name, postsNumber) {
        this.id = id;
        this.name = name;
        this.postsNumber = postsNumber;
    }
}

const categories = ((amount) => {
    const generatedCategories = [];
    for (let i = 1; i <= amount; i++) {
        generatedCategories.push(new Category(i, `Category #${i}`, i));
    }
    return generatedCategories;
})(10);

export {categories};