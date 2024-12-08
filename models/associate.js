const Category = require("./category.model");
const Design = require("./design.model");

Design.belongsTo(Category, {
    foreignKey: "design_category",
    as: "category"
})

Category.hasMany(Design, {
    foreignKey: "design_category",
    as: "category"
})