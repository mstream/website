const categories = ((amount) => {
    const generatedCategories = [];
    for (let i = 1; i <= amount; i++) {
        const id = i % 10 + 1;
        generatedCategories.push(`Category #${id}`);
    }
    return generatedCategories;
})(35);

export {categories};