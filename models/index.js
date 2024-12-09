const Category = require("./category.model");
const Design = require("./design.model");
const User = require("./user.model");

Design.belongsTo(Category, {
    foreignKey: "design_category",
    as: "category"
})

Category.hasMany(Design, {
    foreignKey: "design_category",
    as: "designcategory"
})
module.exports = { Category, Design,User}